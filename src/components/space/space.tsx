import { View } from "react-native";
import { useSpaceStyles } from "./space.style";

interface SpaceProps {
  width?: number;
  height?: number;
}

export const Space: React.FC<SpaceProps> = ({ width = 0, height = 0 }) => {
  const styles = useSpaceStyles(width, height);
  return <View style={styles.container} />;
};
