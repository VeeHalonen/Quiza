import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native";
import { decode } from "html-entities";
import Question from "./Question";
import VictoryView from "./VictoryView";

/* Main questions UI */

// Possible states of the quiz
enum STATES {
  LOADING = "Loading...",
  IN_PROGRESS = "In progress",
  DONE = "Done",
  ERROR = "Error",
}

const Questions = (props: {
  numberOfQuestions: number;
  onFinish: () => void;
  options;
}) => {
  const numberOfQuestions = props.numberOfQuestions;
  const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`;

  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState(STATES.LOADING);
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
      console.log("THE END"); // TODO

      setStatus(STATES.DONE);
    }
    // Else move to next question
    else {
      setIndex(index + 1);
    }
  };

  const fetchNewQuestions = () => {
    setQuestions([]);
    setStatus(STATES.LOADING);
    setLastAnswer("");
    fetch(url)
      .then((data) => data.json())
      .then((questions) => {
        // console.log(questions);
        const questionArr = questions?.results;
        if (questionArr[0] && questionArr.length == numberOfQuestions) {
          console.log(questions?.results[0]);
          setQuestions(questionArr);

          setStatus(STATES.IN_PROGRESS);
          setIndex(0);
          setPoints(0);
        } else {
          setStatus(STATES.ERROR);
        }
      });
  };

  useEffect(() => {
    fetchNewQuestions();
  }, [props]);

  if (status === STATES.DONE) {
    return (
      <>
        <Text>{lastAnswer}</Text>
        <VictoryView
          points={points}
          max={props.numberOfQuestions}
          restart={props.onFinish}
        ></VictoryView>
      </>
    );
  }
  if (status === STATES.LOADING || status === STATES.ERROR) {
    return <Text>{status}</Text>;
  }

  return (
    <>
      <Text>{lastAnswer}</Text>
      <Text>Question {index + 1}</Text>
      <Question question={questions[index]} onAnswer={handleAnswer} />
      <Text>
        Points: {points}/{props.numberOfQuestions}
      </Text>
    </>
  );
};

export default Questions;
