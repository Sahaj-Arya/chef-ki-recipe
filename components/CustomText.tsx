import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters"; // Optional, if you want scaling support

type CustomTextProps = TextProps & {
  fontSize?: number;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  align?: "left" | "center" | "right";
  customStyle?: object;
};

const CustomText: React.FC<CustomTextProps> = ({
  fontSize = scale(14),
  color = "#000", // Default color is black
  bold = false,
  italic = false,
  align = "left",
  customStyle = {},
  style, // This will accept the standard `style` prop from Text
  children,
  ...rest // Accept any other props for the Text component
}) => {
  // Create custom styles
  const textStyle = StyleSheet.flatten([
    styles.text,
    {
      fontSize,
      color,
      fontWeight: bold ? "bold" : "normal",
      fontStyle: italic ? "italic" : "normal",
      textAlign: align,
    },
    customStyle,
    style, // Allow parent component to override default styles
  ]);

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};

// Optional, if you want to scale your text size using react-native-size-matters
const styles = ScaledSheet.create({
  text: {
    fontFamily: "Arial", // Default font family, change as needed
    lineHeight: "25@ms", // Adjust line height with scaling if needed
  },
});

export default CustomText;
