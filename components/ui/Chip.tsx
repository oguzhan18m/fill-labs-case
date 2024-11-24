import { FileStatus } from "@/store/useDataStore";
import { ViewProps, Text, StyleSheet, View, ViewStyle } from "react-native";

export type ChipProps = ViewProps & {
  status: FileStatus;
  style?: ViewStyle;
};

export function Chip({ status, style }: ChipProps) {
  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor:
            status === FileStatus.OPEN ? "#2F54EB" : "transparent",
          borderColor: status === FileStatus.OPEN ? "#2F54EB" : "#22C55E",
          borderWidth: 2,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: status === FileStatus.OPEN ? "white" : "#22C55E" },
        ]}
      >
        {status === FileStatus.OPEN ? "Açık" : "Kapalı"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
