import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { OPTIONS, DEFAULT_OPTIONS, EDifficulty } from "../helpers/options";
import DropDownPicker from "react-native-dropdown-picker";
import { colors, styles } from "../styles";

/* New quiz options */

const Options = (props: { startQuiz: (options: OPTIONS) => void }) => {
  const [amount, setAmount] = useState(DEFAULT_OPTIONS.amount);
  const [difficulty, setDifficulty] = useState(DEFAULT_OPTIONS.difficulty);

  return (
    <>
      {/* TITLE */}
      <View style={{ ...styles.container, marginBottom: 30 }}>
        <Text style={styles.subtitle}>New Quiz</Text>
      </View>
      {/* NUMBER OF QUESTIONS PICKER */}
      <View style={styles.container}>
        <Text style={styles.dropdownTitle}>Number of Questions</Text>
      </View>
      <View style={{ ...styles.container, width: "100%", zIndex: 100 }}>
        <DropDownPicker
          zIndex={5000}
          zIndexInverse={6000}
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
          containerStyle={styles.dropdownContainer}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => setAmount(item.value)}
        />
      </View>
      {/* DIFFICULTY PICKER */}
      <View style={styles.container}>
        <Text style={styles.dropdownTitle}>Difficulty</Text>
      </View>
      <View style={{ ...styles.container, width: "100%", zIndex: 50 }}>
        <DropDownPicker
          zIndex={4000}
          zIndexInverse={5500}
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
          containerStyle={styles.dropdownContainer}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => setDifficulty(item.value)}
        />
      </View>
      {/* START BUTTON */}
      {/* The zIndex is to prevent it from rendering on top of the dropdowns */}
      <View
        style={{
          ...styles.container,
          zIndex: -5,
          marginTop: 50,
          flex: 2,
        }}
      >
        <Button
          onPress={() => props.startQuiz({ amount, difficulty })}
          title="Start Quiz"
          color={colors.secondary}
        />
      </View>
    </>
  );
};

export default Options;
