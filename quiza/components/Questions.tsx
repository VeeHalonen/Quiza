import React, { useState, useEffect } from "react";
import { Text, Image, Button, View } from "react-native";
import Question from "./Question";
import VictoryView from "./VictoryView";
import { OPTIONS, EQuizStates } from "../helpers/helpers";
import { styles, colors } from "../styles";

/* Main questions UI for the quiz */

/* Props:
    onFinish: function to handle the quiz ending
    options: quiz options
 */

const Questions = (props: { onFinish: () => void; options: OPTIONS }) => {
  const numberOfQuestions = props.options.amount;
  // NOTE: Make sure difficulty is always last due to "ALL" option being a space
  const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple&difficulty=${props.options.difficulty}`;

  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState(EQuizStates.LOADING);
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");

  const handleAnswer = (correct: boolean, answer: string) => {
    if (correct) {
      console.log("Correct!");
      setLastAnswer("Correct!");
      setPoints(points + 1);
    } else {
      console.log("Incorrect!");
      setLastAnswer("Incorrect! " + answer);
    }
    // If last question - end game
    if (index == numberOfQuestions - 1) {
      setStatus(EQuizStates.DONE);
    }
    // Else move to next question
    else {
      setIndex(index + 1);
    }
  };

  const fetchNewQuestions = () => {
    setQuestions([]);
    setStatus(EQuizStates.LOADING);
    setLastAnswer("");
    fetch(url)
      .then((data) => data.json())
      .then((questions) => {
        // console.log(questions);
        const questionArr = questions?.results;
        if (questionArr[0] && questionArr.length == numberOfQuestions) {
          console.log(questions?.results[0]);
          setQuestions(questionArr);

          setStatus(EQuizStates.IN_PROGRESS);
          setIndex(0);
          setPoints(0);
        } else {
          setStatus(EQuizStates.ERROR);
        }
      });
  };

  useEffect(() => {
    fetchNewQuestions();
  }, [props]);

  if (status === EQuizStates.DONE) {
    return (
      <>
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>{lastAnswer}</Text>
        </View>
        <VictoryView
          points={points}
          max={numberOfQuestions}
          restart={props.onFinish}
        />
      </>
    );
  }
  if (status === EQuizStates.LOADING) {
    return <Text>{status}</Text>;
  }

  if (status == EQuizStates.ERROR) {
    return (
      <>
        <View style={styles.container}>
          <Text style={{ fontSize: 18 }}>{status}</Text>
        </View>
        <View style={styles.container}>
          <Button
            onPress={props.onFinish}
            title="Try Again"
            color={colors.secondary}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Text>{lastAnswer}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Question {index + 1}</Text>
      </View>
      <Question question={questions[index]} onAnswer={handleAnswer} />
      <View style={styles.container}>
        <Text>
          Points: {points}/{numberOfQuestions}
        </Text>
      </View>
    </>
  );
};

export default Questions;
