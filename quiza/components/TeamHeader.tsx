import React from "react";
import { Text } from "react-native";
import { styles, colors } from "../styles";

/* Header for the given team. Renders "Team [teamNumber][textAfter]".
     Colour changes based on team number. */

/* Props:
    teamNumber: number of the team
    textAfter: text to be displayed after Team [teamNumber] (optional)
*/

const TeamHeader = (props: { teamNumber: number; textAfter?: string }) => {
  return (
    <Text
      style={{
        ...styles.subtitle,
        backgroundColor:
          props.teamNumber === 1 ? colors.main : colors.secondary,
        color: "white",
        padding: 5,
        width: "100%",
      }}
    >
      Team {props.teamNumber} Avatar
    </Text>
  );
};

export default TeamHeader;
