import React, { useState, useEffect } from "react";
import { Text, Image, Button, Vibration } from "react-native";

// To convert ASCII characters from the API
import { decode } from "html-entities";

const AnswerButtons = (props: {
  options: string[];
  correctAnswer: string;
  onAnswer: (correct: boolean, answer: string) => void;
}) => {
  const answer = (opt: string, index: number) => {
    console.log(index);
    if (opt === props.correctAnswer) {
      Vibration.vibrate([0, 100, 200, 200]);
      props.onAnswer(true, decode(props.correctAnswer));
    } else {
      Vibration.vibrate([0, 500]);
      props.onAnswer(false, decode(props.correctAnswer));
    }
  };

  return (
    <>
      {props.options.map((opt, index) => {
        return (
          <Button
            onPress={() => answer(opt, index)}
            title={decode(opt)}
            key={index}
          />
        );
      })}
    </>
  );
};

export default AnswerButtons;
