import React from "react";
import { Text, Button, View } from "react-native";
import { colors, styles } from "../styles";
import PointsTotal from "./PointsTotal";

/* The screen shown at the end of the quiz in versus mode */

/* Props
    points1: Team 1 points
    points2: Team 2 points
    max: maximum possible points
    restart: function to start a new quiz
*/

const VictoryView2P = (props: {
  points1: number;
  points2: number;
  max: number;
  restart: () => void;
}) => {
  // Icon dimensions depend on who won
  const points1Size = props.points1 >= props.points2 ? 110 : 80;
  const points2Size = props.points2 >= props.points1 ? 110 : 80;
  const points1BorderWidth = props.points1 >= props.points2 ? 6 : 4;
  const points2BorderWidth = props.points2 >= props.points1 ? 6 : 4;
  const fontSize1 = props.points1 >= props.points2 ? 28 : 18;
  const fontSize2 = props.points2 >= props.points1 ? 28 : 18;

  return (
    <View>
      {/* Title */}
      <View style={{ ...styles.container }}>
        <Text style={styles.subtitle}>Quiz over!</Text>
      </View>
      {/* Total points T1 */}
      <View style={{ ...styles.container }}>
        <Text style={styles.subtitle2}>Team 1</Text>
      </View>
      <View style={{ ...styles.container, alignSelf: "center" }}>
        <PointsTotal
          points={props.points1}
          max={props.max}
          size={points1Size}
          borderWidth={points1BorderWidth}
          fontSize={fontSize1}
        />
      </View>
      {/* Total points T2 */}
      <View style={{ ...styles.container }}>
        <Text style={styles.subtitle2}>Team 2</Text>
      </View>
      <View style={{ ...styles.container, alignSelf: "center" }}>
        <PointsTotal
          points={props.points2}
          max={props.max}
          size={points2Size}
          borderWidth={points2BorderWidth}
          fontSize={fontSize2}
        />
      </View>
      {/* Restart button */}
      <View style={{ ...styles.container }}>
        <Button
          onPress={props.restart}
          title="New Quiz"
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export default VictoryView2P;
