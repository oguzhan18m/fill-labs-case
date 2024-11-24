import { ViewProps, TouchableOpacity, StyleSheet } from "react-native";
import { Typography } from "./Typography";

export type ToggleButtonProps = ViewProps & {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export function ToggleButton({
  style,
  title,
  isActive,
  onPress,
}: ToggleButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: isActive ? "#D5DDFB" : "#E8E8E8" },
        style,
      ]}
    >
      <Typography title={title} variant="body" size="sm" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
});
