import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../styles";

/* Renders T[teamNumber] [avatar] Q[questionNumber] */

/* Props:
  teamNumber: number
  avatar: avatar uri
  questionNumber: number
  style: avatar style
 */

const QuestionHeaderWithAvatar = (props: {
  teamNumber: number;
  avatar: string;
  questionNumber: number;
  style;
}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* T */}
      <View style={{ margin: 5 }}>
        <Text style={styles.title}>T{props.teamNumber}</Text>
      </View>
      {/* Avatar */}
      <View style={{ margin: 5 }}>
        <Image source={{ uri: props.avatar }} style={props.style} />
      </View>
      {/* Q */}
      <View style={{ margin: 5 }}>
        <Text style={styles.subtitle}>Q{props.questionNumber}</Text>
      </View>
    </View>
  );
};

export default QuestionHeaderWithAvatar;
