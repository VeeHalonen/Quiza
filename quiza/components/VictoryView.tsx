import React from "react";
import { Text, Button, View } from "react-native";
import { colors, styles } from "../styles";
import PointsTotal from "./PointsTotal";

/* The screen shown at the end of the quiz */

/* Props
    points: number of points gained
    max: maximum possible points
    restart: function to start a new quiz
*/

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
      {/* Total points */}
      <View style={{ ...styles.container, flex: 1 }}>
        <PointsTotal points={props.points} max={props.max} />
      </View>
      {/* Restart button */}
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
