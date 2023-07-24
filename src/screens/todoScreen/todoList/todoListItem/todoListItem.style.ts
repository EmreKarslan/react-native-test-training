import { StyleSheet } from "react-native";

export const useTodoListItemStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 30,
      paddingHorizontal: 8,
    },
    checkboxWrapper: {
      flex: 1,
    },
    buttonWrapper: {
      width: 25,
      height: 25,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    button: {
      width: 30,
      backgroundColor: "transparent",
    },
  });
