import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native";

/* Main questions UI */

// To convert ASCII characters from the API
import { decode } from "html-entities";
import Question from "./Question";
import VictoryView from "./VictoryView";

const Questions = (props: { numberOfQuestions: number }) => {
  const numberOfQuestions = props.numberOfQuestions;
  const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`;

  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState("Loading...");
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

      setStatus("Done");
    }
    // Else move to next question
    else {
      setIndex(index + 1);
    }
  };

  const fetchNewQuestions = () => {
    setQuestions([]);
    setStatus("Loading...");
    fetch(url)
      .then((data) => data.json())
      .then((questions) => {
        // console.log(questions);
        const questionArr = questions?.results;
        if (questionArr[0] && questionArr.length == numberOfQuestions) {
          console.log(questions?.results[0]);
          setQuestions(questionArr);

          setStatus("In Progress");
          setIndex(0);
          setPoints(0);
        } else {
          setStatus("Error");
        }
      });
  };

  useEffect(() => {
    fetchNewQuestions();
  }, []);

  if (status === "Done") {
    return (
      <>
        <Text>{lastAnswer}</Text>
        <VictoryView
          points={points}
          max={props.numberOfQuestions}
          restart={fetchNewQuestions}
        ></VictoryView>
      </>
    );
  }
  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Text>Question {index + 1}</Text>
      <Question question={questions[index]} onAnswer={handleAnswer} />
      <Text>
        Points: {points}/{props.numberOfQuestions}
      </Text>
      <Text>{lastAnswer}</Text>
    </>
  );
};

export default Questions;
