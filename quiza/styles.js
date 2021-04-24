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

const containerStyle = {
  // flex: 1,
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
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
    padding: 15,
    margin: 5,
    borderRadius: 10,
    elevation: 1,
  },
  buttonText: {
    marginLeft: 5,
    marginRight: 5,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  dropdownTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.main,
  },
  dropdownContainer: {
    height: 40,
    width: "100%",
    marginBottom: 10,
  },
});
