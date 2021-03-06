import { StyleSheet } from "react-native";

export const colorsBlue = {
  main: "#2B2D42",
  secondary: "#613f6e",
  background: "#dce5f5",
};

export const colors = {
  main: "#4f0804",
  secondary: "#628395",
  background: "#F7F3E3",
};

// Basic avatar styling (TS refused to accept it from the StyleSheet)
const avatarStyle = {
  width: 75,
  height: 75,
  borderWidth: 5,
  // borderRadius: 50,
};

// Colour variation for Team 1
export const avatarStyle1 = {
  ...avatarStyle,
  borderColor: colors.main,
};

// Colour variation for Team 2
export const avatarStyle2 = {
  ...avatarStyle,
  borderColor: colors.secondary,
};

const containerStyle = {
  // flex: 1,
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
};

const buttonStyle = {
  backgroundColor: "white",
  borderColor: "gray",
  borderWidth: 1,
  alignItems: "center",
  padding: 15,
  margin: 5,
  borderRadius: 10,
  elevation: 1,
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
  button: buttonStyle,
  buttonDisabled: {
    ...buttonStyle,
    backgroundColor: "#d9d9d9",
    opacity: 0.5,
  },
  buttonText: {
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle2: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  dropdownTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.main,
  },
  dropdownContainer: {
    height: 40,
    width: "95%",
    marginBottom: 10,
    alignSelf: "center",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
