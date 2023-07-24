import { StyleSheet } from "react-native";

export const useButtonStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
    },
    buttonContainer: {
      borderRadius: 5,
      backgroundColor: "orange",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonDisabled: {
      backgroundColor: "#ECECEC",
    },
    buttonLabel: {
      color: "#FFF",
    },
    buttonLabelDisabled: {
      color: "#000",
    },
  });
