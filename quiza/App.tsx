import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Questions from "./components/Questions";
import Options from "./components/Options";
import { OPTIONS, DEFAULT_OPTIONS, EDifficulty } from "./helpers/options";
import DropDownPicker from "react-native-dropdown-picker";

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

  // Options UI
  if (status === EStates.OPTIONS) {
    return (
      <View style={styles.container}>
        <Options startQuiz={startQuiz} />
      </View>
    );
  }

  // Quiz UI
  return (
    <View style={styles.container}>
      <Text>¡Quizà!</Text>
      <Questions onFinish={handleFinish} options={options} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
