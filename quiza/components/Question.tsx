import React, { useState, useEffect } from "react";
import { Text, Image, View } from "react-native";
import AnswerButtons from "./AnswerButtons";

// To convert ASCII characters from the API
import { decode } from "html-entities";
import { styles } from "../styles";

const Question = (props: {
  question;
  onAnswer: (correct: boolean, answer: string) => void;
}) => {
  if (props.question === undefined) {
    return null;
  }

  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    // Get random index to insert correct answer to
    const incorrectAnswers = [...props.question.incorrect_answers];
    const correctIndex = Math.floor(
      Math.random() * (incorrectAnswers.length + 1)
    );

    // Include correct answer
    console.log(incorrectAnswers);
    var cloneArray = incorrectAnswers.slice();
    cloneArray.splice(correctIndex, 0, props.question.correct_answer);
    setAllAnswers(cloneArray);

    console.log(cloneArray);
    console.log("Correct answer: " + props.question.correct_answer);
  }, [props]);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          {decode(props.question.question)}
        </Text>
      </View>
      <AnswerButtons
        options={allAnswers}
        correctAnswer={props.question.correct_answer}
        onAnswer={props.onAnswer}
      />
    </>
  );
};

export default Question;
