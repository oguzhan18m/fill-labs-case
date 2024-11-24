import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Typography } from "./ui/Typography";
import useDataStore from "@/store/useDataStore";

export type TabBProps = {
  style?: ViewStyle;
};

export function TabB({ style }: TabBProps) {
  const { id } = useLocalSearchParams();
  const { mockData } = useDataStore();
  const file = mockData.find((file) => file.id === Number(id));

  if (!file) return null;

  return (
    <View style={[styles.container, style]}>
      <Typography title="Tab B" variant="title" size="lg" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 16,
  },
});
