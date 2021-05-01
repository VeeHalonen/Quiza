import React, { useState, useEffect } from "react";
import { Text, Image, View } from "react-native";
import AnswerButtons from "./AnswerButtons";
import { styles } from "../styles";
import { QUESTION } from "../helpers/helpers";

// To convert ASCII characters from the API
import { decode } from "html-entities";

/* Renders a single question */

/* Props:
    question: quiz question including its answer options
    onAnswer: function to handle the user answer
    - parameters:
        correct: boolean - was the user's answer correct?
        correctAnswer: the correct answer as a string
 */

const Question = (props: {
  question: QUESTION;
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
    // console.log(incorrectAnswers);
    var cloneArray = incorrectAnswers.slice();
    cloneArray.splice(correctIndex, 0, props.question.correct_answer);
    setAllAnswers(cloneArray);

    // console.log(cloneArray);

    console.log(props.question);
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
