import { useLocalSearchParams } from "expo-router";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Typography } from "./ui/Typography";
import useDataStore from "@/store/useDataStore";

export type FileDetailProps = {
  style?: ViewStyle;
};

export function FileDetail({ style }: FileDetailProps) {
  const { id } = useLocalSearchParams();
  const { mockData, updateFile } = useDataStore();
  const file = mockData.find((file) => file.id === Number(id));

  if (!file) return null;

  const handleTitleChange = (newTitle: string) => {
    updateFile(file.id, { title: newTitle }); // Update the file data
  };

  const handleText1Change = (newText1: string) => {
    updateFile(file.id, { text1: newText1 }); // Update the file data
  };

  const handleNumeric2Change = (newNumeric2: string) => {
    updateFile(file.id, { numeric2: Number(newNumeric2) }); // Update the file data
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          value={file.title}
          placeholder="Mendatory Input"
          onChangeText={handleTitleChange}
        />
        <TextInput
          style={styles.input}
          value={file.text1}
          placeholder="Text input-1"
          onChangeText={handleText1Change}
        />
        <TextInput
          style={styles.input}
          value={String(file.numeric2)}
          placeholder="Numeric input-1"
          keyboardType="numeric"
          onChangeText={handleNumeric2Change}
        />

        <Typography
          title={"Dosya türü"}
          variant="body"
          size="sm"
          style={{ textAlign: "left", marginBottom: 12 }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => updateFile(file.id, { type: "X" })}
            style={[
              styles.button,
              { backgroundColor: file.type === "X" ? "#D5DDFB" : "#E8E8E8" },
            ]}
          >
            <Typography
              title={"X"}
              variant="body"
              size="sm"
              style={{ color: file.type === "X" ? "#09112F" : "#707070" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateFile(file.id, { type: "Y" })}
            style={[
              styles.button,
              { backgroundColor: file.type === "Y" ? "#D5DDFB" : "#E8E8E8" },
            ]}
          >
            <Typography
              title={"Y"}
              variant="body"
              size="sm"
              style={{ color: file.type === "X" ? "#09112F" : "#707070" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#C7C7CC",
  },
  input: {
    height: 56,
    borderColor: "#C7C7CC",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontFamily: "Manrope-Regular",
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    minWidth: "45%",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
