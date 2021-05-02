import React from "react";
import { Text, Button, View, Image } from "react-native";
import { colors, styles, avatarStyle1, avatarStyle2 } from "../styles";
import PointsTotal from "./PointsTotal";

/* The screen shown at the end of the quiz in versus mode with avatars */

/* Props
    points1: Team 1 points
    points2: Team 2 points
    max: maximum possible points
    restart: function to start a new quiz
    avatar1: avatar uri for Team 1
    avatar2: avatar uri for Team 2
*/

const VictoryView2PAvatars = (props: {
  points1: number;
  points2: number;
  max: number;
  avatar1: string;
  avatar2: string;
  restart: () => void;
}) => {
  const points1Size = 80;
  const points2Size = 80;
  const points1BorderWidth = 4;
  const points2BorderWidth = 4;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Quiz over!</Text>
      </View>
      {/* Results */}
      <View style={styles.container}>
        <Text style={styles.subtitle2}>
          {props.points1 > props.points2 && "Team 1 Wins!"}
          {props.points2 > props.points1 && "Team 2 Wins!"}
          {props.points1 === props.points2 && "It's a Tie!"}
        </Text>
      </View>
      <View
        style={{
          ...styles.container,
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        {/* Team 1 wins (or tie) */}
        {props.points1 >= props.points2 && (
          <View>
            <Image
              source={{ uri: props.avatar1 }}
              style={{
                ...avatarStyle1,
                width: points1Size,
                height: points1Size,
              }}
            />
          </View>
        )}
        {/* Team 2 wins (or tie) */}
        {props.points2 >= props.points1 && (
          <View>
            <Image
              source={{ uri: props.avatar2 }}
              style={{
                ...avatarStyle2,
                width: points2Size,
                height: points2Size,
              }}
            />
          </View>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {/* Total points T1 */}
        <View>
          <View style={{ ...styles.container }}>
            <Text style={styles.subtitle2}>Team 1</Text>
          </View>
          <View style={{ ...styles.container, alignContent: "center" }}>
            <PointsTotal
              points={props.points1}
              max={props.max}
              size={points1Size}
              borderWidth={points1BorderWidth}
            />
          </View>
        </View>
        {/* Total points T2 */}
        <View>
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
        </View>
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

export default VictoryView2PAvatars;
