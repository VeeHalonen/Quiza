import React from "react";
import { View, Text, Vibration, TouchableOpacity } from "react-native";
import { styles } from "../styles";

// To convert ASCII characters from the API
import { decode } from "html-entities";

/* Buttons for answering quiz questions */

/* Props:
    options: string array containing the answer options in a random order
    correctAnswer: string containing the correct option
    onAnswer: function for handling the response
    - parameters:
        correct: boolean - was the user's answer correct?
        correctAnswer: the correct answer as a string
 */

const AnswerButtons = (props: {
  options: string[];
  correctAnswer: string;
  onAnswer: (correct: boolean, correctAnswer: string) => void;
}) => {
  // Handle user's answer
  const answer = (opt: string, index: number) => {
    // console.log(index);
    if (opt === props.correctAnswer) {
      Vibration.vibrate([0, 100, 200, 200]);
      props.onAnswer(true, decode(props.correctAnswer));
    } else {
      Vibration.vibrate([0, 500]);
      props.onAnswer(false, decode(props.correctAnswer));
    }
  };

  return (
    <View style={{ width: "100%" }}>
      {/* Render buttons for each option */}
      {props.options.map((opt, index) => {
        return (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => answer(opt, index)}
          >
            <Text style={styles.buttonText}>{decode(opt)}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AnswerButtons;
