import React, { useState, useEffect } from "react";
import { Text, Image, Button } from "react-native";
import Options from "./Options";

// To convert ASCII characters from the API
import { decode } from "html-entities";

const VictoryView = (props: {
  points: number;
  max: number;
  restart: () => void;
}) => {
  return (
    <>
      <Text>Quiz over!</Text>
      <Text>Final Score</Text>
      <Text>
        {props.points}/{props.max}
      </Text>
      <Button onPress={props.restart} title="Restart" />
    </>
  );
};

export default VictoryView;
