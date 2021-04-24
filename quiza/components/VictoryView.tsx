import React, { useState, useEffect } from "react";
import { Text, Image, Button } from "react-native";
import { colors, styles } from "../styles";

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
      <Button
        onPress={props.restart}
        title="New Quiz"
        color={colors.secondary}
      />
    </>
  );
};

export default VictoryView;
