import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import QuizView from "./components/QuizView";
import Options from "./components/Options";
import {
  OPTIONS,
  DEFAULT_OPTIONS,
  EAppStates,
  EQuizMode,
} from "./helpers/helpers";
import { styles, colors, avatarStyle1 } from "./styles";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CameraView from "./components/CameraView";

export default function App() {
  const [status, setStatus] = useState(EAppStates.OPTIONS);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  // Team avatars, if enabled
  const [avatar1, setAvatar1] = useState(null);
  const [avatar2, setAvatar2] = useState(null);
  const [avatarsSet, setAvatarsSet] = useState(0);

  const handleFinish = () => {
    console.log("Quiz finished!");
    setStatus(EAppStates.OPTIONS);
  };

  // Reset avatars when options change
  useEffect(() => {
    setAvatar1(null);
    setAvatar2(null);
    setAvatarsSet(0);
  }, [options]);

  const startQuiz = (options: OPTIONS) => {
    setOptions(options);
    // If avatars were chosen, launch avatar picker
    if (options.mode === EQuizMode.VERSUS && options.avatars) {
      setStatus(EAppStates.AVATARS);
    } else {
      setStatus(EAppStates.QUIZ);
    }
  };

  const setAvatar = (image) => {
    if (image) {
      // Set first avatar
      if (avatarsSet === 0) {
        console.log("Setting Avatar 1");

        setAvatar1(image.uri);
      }
      // Set second avatar and start quiz
      else if (avatarsSet === 1) {
        console.log("Setting Avatar 2");
        setAvatar2(image.uri);
        setStatus(EAppStates.QUIZ);
      }
      setAvatarsSet(avatarsSet + 1);
    } else {
      setStatus(EAppStates.QUIZ);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar style="light" />
        {/* App Header */}
        <Header
          backgroundColor={colors.main}
          leftComponent={{}}
          centerComponent={{
            text: "¡Quizà!",
            style: { color: "#fff", fontSize: 15 },
          }}
          rightComponent={{}}
          // rightComponent={{ icon: "home", color: "#fff" }}
        />
        {/* Options UI */}
        {status === EAppStates.OPTIONS && (
          <View
            style={{
              ...styles.topLevelContainer,
              height: "80%",
            }}
          >
            <Options startQuiz={startQuiz} />
          </View>
        )}
        {/* Avatar Picker */}
        {status === EAppStates.AVATARS && (
          <CameraView acceptPicture={setAvatar} teamNumber={avatarsSet + 1} />
        )}
        {/* Quiz UI */}
        {status === EAppStates.QUIZ && (
          <View style={styles.topLevelContainer}>
            <QuizView
              onFinish={handleFinish}
              options={options}
              avatar1={avatar1}
              avatar2={avatar2}
            />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
}
