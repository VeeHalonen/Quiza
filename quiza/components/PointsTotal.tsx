import React from "react";
import { Text, View } from "react-native";
import { colors, styles } from "../styles";

/* Formatted view to show total points gained during the quiz */

/* Props
    points: number of points gained
    max: maximum possible points
*/

const PointsTotal = (props: { points: number; max: number }) => {
  return (
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
  );
};

export default PointsTotal;
