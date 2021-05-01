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
  const points1Size = props.points1 >= props.points2 ? 100 : 80;
  const points2Size = props.points2 >= props.points1 ? 100 : 80;
  const points1BorderWidth = props.points1 >= props.points2 ? 6 : 4;
  const points2BorderWidth = props.points2 >= props.points1 ? 6 : 4;

  return (
    <View>
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
