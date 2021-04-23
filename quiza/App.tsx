import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Questions from "./components/Questions";
import Options from "./components/Options";

enum STATES {
  OPTIONS,
  QUIZ,
}

export default function App() {
  const [status, setStatus] = useState(STATES.OPTIONS);
  const [options, setOptions] = useState({});

  const handleFinish = () => {
    console.log("Quiz finished!");
    setStatus(STATES.OPTIONS);
  };

  const startQuiz = () => {
    setStatus(STATES.QUIZ);
  };

  // Options UI
  if (status === STATES.OPTIONS) {
    return <Options onSetOptions={setOptions} startQuiz={startQuiz} />;
  }

  // Quiz UI
  return (
    <View style={styles.container}>
      <Text>¡Quizà!</Text>
      <Questions
        numberOfQuestions={10}
        onFinish={handleFinish}
        options={options}
      />
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
