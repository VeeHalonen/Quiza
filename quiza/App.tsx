import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import QuizView from "./components/QuizView";
import Options from "./components/Options";
import { OPTIONS, DEFAULT_OPTIONS, EAppStates } from "./helpers/helpers";
import { styles, colors } from "./styles";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import VictoryPortrait from "./components/CameraView";

export default function App() {
  const [status, setStatus] = useState(EAppStates.OPTIONS);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const handleFinish = () => {
    console.log("Quiz finished!");
    setStatus(EAppStates.OPTIONS);
  };

  const startQuiz = (options: OPTIONS) => {
    setOptions(options);
    setStatus(EAppStates.QUIZ);
  };

  // TODO: delete (for testing camera)
  // return (
  //   <SafeAreaProvider>
  //     <View style={{ flex: 1, backgroundColor: colors.background }}>
  //       <VictoryPortrait acceptPicture={null} />
  //     </View>
  //   </SafeAreaProvider>
  // );

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
        {/* Quiz UI */}
        {status === EAppStates.QUIZ && (
          <View style={styles.topLevelContainer}>
            <QuizView onFinish={handleFinish} options={options} />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
}
