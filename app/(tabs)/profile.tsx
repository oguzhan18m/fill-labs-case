import { StyleSheet, SafeAreaView } from "react-native";
import { Typography } from "@/components/ui/Typography";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Typography title="Profile" variant="title" size="lg" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
});
