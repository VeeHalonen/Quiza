import { StyleSheet } from "react-native";

export const colorsBlue = {
  main: "#2B2D42",
  secondary: "#613f6e",
  background: "#dce5f5",
};

export const colorsRed = {
  main: "#4f0804",
  secondary: "#628395",
  background: "#F7F3E3",
};

export const colors = {
  main: "#4f0804",
  secondary: "#628395", // 628395
  background: "#F7F3E3",
};

const containerStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const styles = StyleSheet.create({
  container: containerStyle,
  topLevelContainer: {
    ...containerStyle,
    margin: 20,
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    elevation: 1,
  },
  buttonText: {
    // color: "#fff",
    marginLeft: 5,
    marginRight: 5,
  },
});
