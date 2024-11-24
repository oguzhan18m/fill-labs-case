import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useSearchStore } from "@/store/useSearchStore";

export type SearchInputProps = ViewProps & {
  style?: ViewStyle;
};

export function SearchInput({ style }: SearchInputProps) {
  const { searchText, setSearchText } = useSearchStore();

  return (
    <View style={[styles.container, style]}>
      <Icon name="search" size={24} color="#A9A9A9" style={styles.icon} />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Dosya ara"
        placeholderTextColor="#A9A9A9"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 100,
    padding: 16,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 16,
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
    color: "#000000",
  },
});
