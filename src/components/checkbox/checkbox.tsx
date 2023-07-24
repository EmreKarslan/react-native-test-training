import { CheckmarkIcon } from "@/icons/";
import { TouchableOpacity, View, Text } from "react-native";
import { useCheckboxStyles } from "./checkbox.style";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const styles = useCheckboxStyles();

  const handlePress = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handlePress}>
      <View style={[styles.checkbox, checked && styles.checkboxFilled]}>
        {checked && <CheckmarkIcon width={12} height={12} mainColor="#FFF" />}
      </View>
      <Text
        style={[styles.label, checked && styles.labelSelected]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
