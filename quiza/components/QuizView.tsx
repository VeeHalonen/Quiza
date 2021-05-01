import React, { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import VictoryView from "./VictoryView";
import { OPTIONS, EQuizStates, EQuizMode } from "../helpers/helpers";
import { styles, colors } from "../styles";
import Questions from "./Questions";
import Questions2P from "./Questions2P";
import VictoryView2P from "./VictoryView2P";

/* Main quiz UI */

/* Props:
    onFinish: function to handle the quiz ending
    options: quiz options
 */

const QuizView = (props: { onFinish: () => void; options: OPTIONS }) => {
  const numberOfQuestions = props.options.amount;
  // Is the quiz in versus mode?
  const vsMode = props.options.mode === EQuizMode.VERSUS;
  // NOTE: Make sure difficulty is always last due to "ALL" option being a space
  const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple&difficulty=${props.options.difficulty}`;

  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState(EQuizStates.LOADING);
  const [points, setPoints] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");

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
          setQuestions(questionArr);

          setStatus(EQuizStates.IN_PROGRESS);
          setPoints(0);
        } else {
          setStatus(EQuizStates.ERROR);
        }
      });
  };

  useEffect(() => {
    fetchNewQuestions();
  }, [props]);

  const finishQuiz = (points: number, lastAnswer: string) => {
    setStatus(EQuizStates.DONE);
    setLastAnswer(lastAnswer);
    setPoints(points);
  };

  // TODO: finish this
  const finishQuiz2P = (
    points1: number,
    points2: number,
    lastAnswer: string
  ) => {
    setStatus(EQuizStates.DONE);
    setLastAnswer(lastAnswer);
    setPoints(points1);
    setPoints2(points2);
    console.log("Team 1 points: " + points1 + "/" + numberOfQuestions / 2);
    console.log("Team 2 points: " + points2 + "/" + numberOfQuestions / 2);
  };

  if (status === EQuizStates.DONE) {
    return (
      <>
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>{lastAnswer}</Text>
        </View>
        {/* Normal mode victory screen */}
        {!vsMode && (
          <VictoryView
            points={points}
            max={numberOfQuestions}
            restart={props.onFinish}
          />
        )}
        {/* Versus mode victory screen */}
        {vsMode && (
          <VictoryView2P
            points1={points}
            points2={points2}
            max={numberOfQuestions / 2}
            restart={props.onFinish}
          />
        )}
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

  if (vsMode) {
    return <Questions2P onFinish={finishQuiz2P} questions={questions} />;
  }
  return <Questions onFinish={finishQuiz} questions={questions} />;
};

export default QuizView;
