import { SvgProps } from "react-native-svg";

export interface IconProp extends SvgProps {
  mainColor?: string;
  secondaryColor?: string;
  thickness?: number;
  thicknessMiterLimit?: number;
  rotate?: number;
}
