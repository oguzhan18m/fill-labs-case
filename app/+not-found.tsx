import { Typography } from "@/components/ui/Typography";
import { Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Typography
        title="This screen doesn't exist."
        variant="title"
        size="lg"
      />
    </>
  );
}
