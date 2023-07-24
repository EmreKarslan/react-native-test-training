import { StyleSheet } from "react-native";

export const useSpaceStyles = (width = 0, height = 0) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
  });
