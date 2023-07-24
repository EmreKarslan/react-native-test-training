import { StyleSheet } from "react-native";

export const useCheckboxStyles = () =>
  StyleSheet.create({
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: "#6E6E6E",
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    checkboxFilled: {
      backgroundColor: "#20a422",
    },
    label: {
      flex: 1,
      color: "#000",
    },
    labelSelected: { textDecorationLine: "line-through" },
  });
