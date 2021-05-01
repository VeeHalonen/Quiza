import React, { useState } from "react";
import { Text, View } from "react-native";
import Question from "./Question";
import { styles, colors } from "../styles";

/* Main questions UI for versus mode */

/* Props:
  questions: quiz questions
  onFinish: function to handle the quiz ending
  - parameters:
    points1: number - Team 1 points
    points2: number - Team 2 points
    lasAnswer: the correct answer to last question as a string
 */

const Questions2P = (props: {
  questions: any[];
  onFinish: (points1: number, points2: number, lastAnswer: string) => void;
}) => {
  const numberOfQuestions = props.questions.length;
  const maxPoints = numberOfQuestions / 2; // questions are shared

  // Track questions
  const [index, setIndex] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");
  // Track whose turn it is
  const [team1Turn, setTeam1Turn] = useState(true);
  // Track points
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);

  const handleAnswer = (correct: boolean, answer: string) => {
    // To fix state variables not updating before onFinish is called
    let newPoints1 = points1;
    let newPoints2 = points2;
    let ans = correct ? "Correct!" : "Incorrect! " + answer;

    // Correct answer
    if (correct) {
      console.log("Correct!");
      setLastAnswer(ans);

      // Points for Team 1
      if (team1Turn) {
        newPoints1++;
        setPoints1(newPoints1);
      }
      // Points for Team 2
      else {
        newPoints2++;
        setPoints2(newPoints2);
      }
    } else {
      console.log("Incorrect!");
      setLastAnswer(ans);
    }
    // If last question - end game
    if (index == numberOfQuestions - 1) {
      props.onFinish(newPoints1, newPoints2, ans);
    }
    // Else move to next question and change active team
    else {
      setIndex(index + 1);
      setTeam1Turn(!team1Turn);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>{lastAnswer}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Team {team1Turn ? 1 : 2} Question {Math.ceil((index + 1) / 2)}
        </Text>
      </View>
      <Question question={props.questions[index]} onAnswer={handleAnswer} />
      <View style={styles.container}>
        <Text>
          Team 1 Points: {points1}/{maxPoints}
        </Text>
        <Text>
          Team 2 Points: {points2}/{maxPoints}
        </Text>
      </View>
    </>
  );
};

export default Questions2P;
