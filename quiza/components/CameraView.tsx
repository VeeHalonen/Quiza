import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { Camera } from "expo-camera";
import { styles } from "../styles";
import ImagePreview from "./ImagePreview";
import TeamHeader from "./TeamHeader";

/* Camera component to take and return a picture */

/* Props:
    acceptPicture: function that sends image for further processing (null if failed)
    teamNumber: number of the team whose picture we are taking
*/

const CameraView = (props: {
  acceptPicture: (image: { uri }) => void;
  teamNumber: number;
}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraEnabled, setCameraEnabled] = useState(true);

  let camera: Camera;
  if (camera) {
    console.log(camera.getSupportedRatiosAsync());
  }

  // Request camera permission on mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const retakePicture = () => {
    setCapturedImage(null);
    setCameraEnabled(true);
  };

  const acceptPicture = () => {
    setCameraEnabled(true);
    props.acceptPicture(capturedImage);
    setCapturedImage(null);
  };

  if (hasPermission === null) {
    return <View />;
  }
  // No permission
  if (hasPermission === false) {
    ToastAndroid.show("No Camera Permission", ToastAndroid.SHORT);
    props.acceptPicture(null);
  }

  const takePicture = async () => {
    if (!camera) return;
    setCameraEnabled(false);
    const photo = await camera.takePictureAsync();
    setCapturedImage(photo);
    console.log(photo);
  };

  // Get screen dimensions
  const dimensions = Dimensions.get("window");
  const screenWidth = dimensions.width;
  const height = Math.round((screenWidth * 16) / 9) - 130;
  const ratio = 16 / 9;

  return (
    <View style={styles.container}>
      {!capturedImage && (
        <Camera
          style={{ height: height, width: height / ratio, marginTop: 20 }}
          type={type}
          ratio="16:9"
          ref={(r) => {
            camera = r;
          }}
        >
          {/* Title */}
          {/* Flip camera button */}
          <View
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <TeamHeader teamNumber={props.teamNumber} textAfter=" Avatar" />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text> Flip </Text>
            </TouchableOpacity>
          </View>
          {/* Take picture button */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={cameraEnabled ? styles.button : styles.buttonDisabled}
              onPress={() => {
                console.log("Smile!");
                takePicture();
              }}
              disabled={!cameraEnabled}
            >
              <Text>{cameraEnabled ? "Take pic" : "Loading..."}</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      {capturedImage && (
        <ImagePreview
          image={capturedImage}
          onAccept={acceptPicture}
          onReject={retakePicture}
          teamNumber={props.teamNumber}
        />
      )}
    </View>
  );
};

export default CameraView;
