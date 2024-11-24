import {
  ViewProps,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Typography } from "./Typography";

export type PrimaryButtonProps = ViewProps & {
  title: string;
  leftIcon?: React.ReactNode;
  style?: ViewStyle;
};

export function PrimaryButton({ style, title, leftIcon }: PrimaryButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[styles.button, style]}>
      {leftIcon}
      <Typography title={title} variant="body" size="md" style={styles.title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 100,
    backgroundColor: "#2F54EB",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "white",
  },
});
