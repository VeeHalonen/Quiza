import React from "react";
import { View, Image, Button } from "react-native";
import { styles, colors, avatarStyle } from "../styles";

/* Preview of the image taken with camera */

/* Props:
  image: picture to be rendered
  onAccept: function for handling the accepted picture
  onReject: function for handling a rejected picture
*/

const ImagePreview = (props: {
  image: { uri };
  onAccept: () => void;
  onReject: () => void;
}) => {
  return (
    <View style={styles.topLevelContainer}>
      <View style={{ ...styles.container, flex: 1 }}>
        <Image source={{ uri: props.image.uri }} style={avatarStyle} />
      </View>
      <View style={styles.container}>
        <Button
          onPress={props.onReject}
          title="Retake"
          color={colors.secondary}
        />
      </View>
      <View style={styles.container}>
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
