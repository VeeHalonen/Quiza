import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  Button,
  View,
  ImageBackgroundComponent,
} from "react-native";
import { colors, styles } from "../styles";

const VictoryView = (props: {
  points: number;
  max: number;
  restart: () => void;
}) => {
  return (
    <View>
      <View style={{ ...styles.container, flex: 1 }}>
        <Text style={styles.subtitle}>Quiz over!</Text>
      </View>
      <View
        style={{
          ...styles.container,
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderColor: colors.main,
            borderWidth: 4,
            alignItems: "center",
            justifyContent: "center",
            // padding: 15,
            // margin: 5,
            height: 110,
            width: 110,
            padding: 10,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              ...styles.subtitle,
              color: colors.secondary,
              fontSize: 30,
            }}
          >
            {props.points}/{props.max}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.container, flex: 6 }}>
        <Button
          onPress={props.restart}
          title="New Quiz"
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export default VictoryView;
