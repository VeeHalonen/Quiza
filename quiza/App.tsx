import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Questions from "./components/Questions";
import Options from "./components/Options";
import { OPTIONS, DEFAULT_OPTIONS } from "./helpers/options";
import { styles, colors } from "./styles";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

enum EStates {
  OPTIONS,
  QUIZ,
}

export default function App() {
  const [status, setStatus] = useState(EStates.OPTIONS);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const handleFinish = () => {
    console.log("Quiz finished!");
    setStatus(EStates.OPTIONS);
  };

  const startQuiz = (options: OPTIONS) => {
    setOptions(options);
    setStatus(EStates.QUIZ);
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
        {status === EStates.OPTIONS && (
          <View
            style={{
              ...styles.topLevelContainer,
              height: "80%",
            }}
          >
            {/* <View style={styles.container}>
            <Text>Welcome to ¡Quizà!</Text>
          </View> */}
            <Options startQuiz={startQuiz} />
          </View>
        )}
        {/* Quiz UI */}
        {status === EStates.QUIZ && (
          <View style={styles.topLevelContainer}>
            <Questions onFinish={handleFinish} options={options} />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
}
