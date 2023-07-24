import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProp } from "@/types/IconProp.types";
export const TrashIcon = ({
  width = 30,
  height = 30,
  mainColor = "#fff",
}: IconProp) => (
  <Svg width={width} height={height} viewBox="0 0 14.625 16.251">
    <G strokeWidth={52.2}>
      <Path
        fill={mainColor}
        d="M5.688 13a.813.813 0 0 0 .813-.813V7.313a.813.813 0 1 0-1.625 0v4.875a.813.813 0 0 0 .812.812Zm8.125-9.75h-3.25v-.812A2.438 2.438 0 0 0 8.125 0H6.5a2.438 2.438 0 0 0-2.437 2.438v.812H.813a.813.813 0 0 0 0 1.625h.813v8.938a2.438 2.438 0 0 0 2.438 2.438h6.5A2.438 2.438 0 0 0 13 13.813V4.875h.813a.813.813 0 1 0 0-1.625Zm-8.125-.812a.813.813 0 0 1 .812-.813h1.625a.813.813 0 0 1 .813.813v.812h-3.25Zm5.688 11.375a.813.813 0 0 1-.813.813h-6.5a.813.813 0 0 1-.813-.813V4.875h8.125ZM8.938 13a.813.813 0 0 0 .813-.813V7.313a.813.813 0 1 0-1.625 0v4.875a.813.813 0 0 0 .812.812Z"
      />
    </G>
  </Svg>
);
