import React from "react";
import { View, Image, Button, Text } from "react-native";
import { styles, colors, avatarStyle1, avatarStyle2 } from "../styles";

/* Preview of the image taken with camera */

/* Props:
  image: picture to be rendered
  onAccept: function for handling the accepted picture
  onReject: function for handling a rejected picture
  teamNumber: number of the team (affects border color)
*/

const ImagePreview = (props: {
  image: { uri };
  onAccept: () => void;
  onReject: () => void;
  teamNumber: number;
}) => {
  // Pick avatar colour based on team number
  const avatarStyle = props.teamNumber === 1 ? avatarStyle1 : avatarStyle2;

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.container}>
        <Text style={styles.subtitle}>Team {props.teamNumber} Avatar</Text>
      </View>
      <View style={styles.topLevelContainer}>
        <Image
          source={{ uri: props.image.uri }}
          style={{ ...avatarStyle, width: 200, height: 200 }}
        />
      </View>
      {/* Reject button */}
      <View style={{ ...styles.topLevelContainer }}>
        <Button
          onPress={props.onReject}
          title="Retake"
          color={colors.secondary}
        />
      </View>
      {/* Accept button */}
      <View style={{ ...styles.container }}>
        <Button
          color={colors.secondary}
          onPress={props.onAccept}
          title="Accept"
        />
      </View>
    </View>
  );
};

export default ImagePreview;
