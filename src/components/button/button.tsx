import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { useButtonStyles } from "./button.style";

type AcButtonProps = {
  label?: string;
  onPress: () => void;
  isDisabled?: boolean;
  customStyle?: {
    container?: StyleProp<ViewStyle>;
    disabled?: StyleProp<ViewStyle>;
    label?: StyleProp<TextStyle>;
  };
  children?: React.ReactNode;
};

export const Button = ({
  children,
  isDisabled = false,
  customStyle = {},
  onPress,
  label = "label",
}: AcButtonProps) => {
  const styles = useButtonStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={styles.container}
    >
      <View
        style={[
          styles.buttonContainer,
          customStyle.container,
          isDisabled && styles.buttonDisabled,
          isDisabled && customStyle.disabled,
        ]}
      >
        {children ? (
          children
        ) : (
          <Text style={[styles.buttonLabel, customStyle.label]}>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
