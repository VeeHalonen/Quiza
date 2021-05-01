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
  return (
    <View>
      <View style={{ ...styles.container }}>
        <Text style={styles.subtitle}>Quiz over!</Text>
      </View>
      {/* Total points T1 */}
      <View style={{ ...styles.container }}>
        <Text>Team 1</Text>
      </View>
      <View style={{ ...styles.container }}>
        <PointsTotal points={props.points1} max={props.max} />
      </View>
      {/* Total points T2 */}
      <View style={{ ...styles.container }}>
        <Text>Team 2</Text>
      </View>
      <View style={{ ...styles.container }}>
        <PointsTotal points={props.points2} max={props.max} />
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
