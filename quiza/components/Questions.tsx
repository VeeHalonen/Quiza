import React, { useState } from "react";
import { Text, View } from "react-native";
import Question from "./Question";
import { styles } from "../styles";

/* Main questions UI for the single-player quiz */

/* Props:
  questions: quiz questions
  onFinish: function to handle the quiz ending
  - parameters:
    points: number - player's points
    lasAnswer: the correct answer to last question as a string
 */

const Questions = (props: {
  questions: any[];
  onFinish: (points: number, lastAnswer: string) => void;
}) => {
  const numberOfQuestions = props.questions.length;

  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");

  const handleAnswer = (correct: boolean, answer: string) => {
    // To fix state variables not updating before onFinish is called
    let newPoints = points;
    let ans = correct ? "Correct!" : "Incorrect! " + answer;
    if (correct) {
      console.log("Correct!");
      setLastAnswer(ans);
      newPoints++;
      setPoints(newPoints);
    } else {
      console.log("Incorrect!");
      setLastAnswer(ans);
    }
    // If last question - end game
    if (index == numberOfQuestions - 1) {
      props.onFinish(newPoints, ans);
    }
    // Else move to next question
    else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>{lastAnswer}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Question {index + 1}</Text>
      </View>
      <Question question={props.questions[index]} onAnswer={handleAnswer} />
      <View style={styles.container}>
        <Text>
          Points: {points}/{numberOfQuestions}
        </Text>
      </View>
    </>
  );
};

export default Questions;
