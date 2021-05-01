import React, { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import VictoryView from "./VictoryView";
import { OPTIONS, EQuizStates } from "../helpers/helpers";
import { styles, colors } from "../styles";
import Questions from "./Questions";

/* Main quiz UI */

/* Props:
    onFinish: function to handle the quiz ending
    options: quiz options
 */

const QuizView = (props: { onFinish: () => void; options: OPTIONS }) => {
  const numberOfQuestions = props.options.amount;
  // NOTE: Make sure difficulty is always last due to "ALL" option being a space
  const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple&difficulty=${props.options.difficulty}`;

  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState(EQuizStates.LOADING);
  const [points, setPoints] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");

  const fetchNewQuestions = () => {
    setQuestions([]);
    setStatus(EQuizStates.LOADING);
    // setLastAnswer("");
    fetch(url)
      .then((data) => data.json())
      .then((questions) => {
        // console.log(questions);
        const questionArr = questions?.results;
        if (questionArr[0] && questionArr.length == numberOfQuestions) {
          setQuestions(questionArr);

          setStatus(EQuizStates.IN_PROGRESS);
          // setIndex(0);
          // setPoints(0);
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

  return <Questions onFinish={finishQuiz} questions={questions} />;
};

export default QuizView;
