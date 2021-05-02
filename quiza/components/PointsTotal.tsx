import React from "react";
import { Text, View } from "react-native";
import { colors, styles } from "../styles";

/* Formatted view to show total points gained during the quiz */

/* Props
    points: number of points gained
    max: maximum possible points
    size: height and width of the component (optional)
    borderWidth: thickness of the border (optional)
    fontSize: number (optional)
*/

const PointsTotal = (props: {
  points: number;
  max: number;
  size?: number;
  borderWidth?: number;
  fontSize?: number;
}) => {
  const borderWidth = props.borderWidth || 6;
  const size = props.size || 110;
  const fontSize = props.fontSize || 30;
  return (
    <View
      style={{
        backgroundColor: "white",
        borderColor: colors.main,
        borderWidth: borderWidth,
        alignItems: "center",
        justifyContent: "center",
        // padding: 15,
        // margin: 5,
        height: size,
        width: size,
        padding: 10,
        borderRadius: 100,
      }}
    >
      <Text
        style={{
          ...styles.subtitle,
          color: colors.secondary,
          fontSize: fontSize,
        }}
      >
        {props.points}/{props.max}
      </Text>
    </View>
  );
};

export default PointsTotal;
