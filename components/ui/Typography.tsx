import { ViewProps, Text, StyleSheet, TextStyle } from "react-native";

export type TypographyProps = ViewProps & {
  bgColor?: string;
  title: string;
  variant: "title" | "body" | "caption";
  size: "sm" | "md" | "lg";
  style?: TextStyle;
  disabled?: boolean;
};

export function Typography({
  style,
  title,
  variant,
  size,
  disabled,
}: TypographyProps) {
  return (
    <Text
      style={[
        styles.title,
        {
          fontSize: size === "sm" ? 14 : size === "md" ? 16 : 18,
          fontFamily: variant === "title" ? "Manrope-Bold" : "Manrope-Regular",
          color: disabled ? "#09112F" : "black",
        },
        style,
      ]}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Manrope-Regular",
    fontSize: 12,
    fontWeight: "normal",
    color: "white",
    textAlign: "center",
  },
});
