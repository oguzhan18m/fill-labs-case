import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Typography } from "@/components/ui/Typography";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === "android" && <StatusBar barStyle="dark-content" />}
      <Typography title="Profile" variant="title" size="lg" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 8 : 0,
  },
});
