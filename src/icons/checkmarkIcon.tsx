import { IconProp } from "@/types/IconProp.types";
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
export const CheckmarkIcon = ({
  width,
  height,
  mainColor = "#00FF00",
}: IconProp) => (
  <Svg width={width} height={height} fill="none" viewBox="0 -1.5 12 12">
    <G strokeWidth={0} />
    <G strokeLinecap="round" strokeLinejoin="round" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.707 4.293A1 1 0 0 0 .293 5.707l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.293.293L4 6.586 1.707 4.293z"
      fill={mainColor}
    />
  </Svg>
);
