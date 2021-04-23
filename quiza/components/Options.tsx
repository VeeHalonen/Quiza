import React, { useState, useEffect } from "react";
import { Text, Image, Button } from "react-native";

/* New quiz options */

const Options = (props: {
  onSetOptions: (options) => void;
  startQuiz: () => void;
}) => {
  return (
    <>
      <Text>Options</Text>
      <Button onPress={props.startQuiz} title="Start Quiz" />
    </>
  );
};

export default Options;
