import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { OPTIONS, DEFAULT_OPTIONS, EDifficulty } from "../helpers/options";
import DropDownPicker from "react-native-dropdown-picker";

/* New quiz options */

const Options = (props: { startQuiz: (options: OPTIONS) => void }) => {
  const [amount, setAmount] = useState(DEFAULT_OPTIONS.amount);
  const [difficulty, setDifficulty] = useState(DEFAULT_OPTIONS.difficulty);

  return (
    <>
      {/* TITLE */}
      <Text>New Quiz</Text>
      {/* NUMBER OF QUESTIONS PICKER */}
      <Text>Number of Questions</Text>
      <DropDownPicker
        items={[
          {
            label: DEFAULT_OPTIONS.amount.toString(),
            value: DEFAULT_OPTIONS.amount,
          },
          {
            label: "20",
            value: 20,
          },
          {
            label: "50",
            value: 50,
          },
        ]}
        defaultValue={DEFAULT_OPTIONS.amount}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        onChangeItem={(item) => setAmount(item.value)}
      />
      {/* DIFFICULTY PICKER */}
      {/* The zIndex is to prevent first dropdown from rendering behind these */}
      <View style={{ zIndex: -5 }}>
        <Text>Difficulty</Text>
        <DropDownPicker
          items={[
            {
              label: "All",
              value: EDifficulty.ALL,
            },
            {
              label: "Easy",
              value: EDifficulty.EASY,
            },
            {
              label: "Medium",
              value: EDifficulty.MEDIUM,
            },
            {
              label: "Hard",
              value: EDifficulty.HARD,
            },
          ]}
          defaultValue={EDifficulty.ALL}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => setDifficulty(item.value)}
        />
        {/* START BUTTON */}
        <Button
          onPress={() => props.startQuiz({ amount, difficulty })}
          title="Start Quiz"
        />
      </View>
    </>
  );
};

export default Options;
