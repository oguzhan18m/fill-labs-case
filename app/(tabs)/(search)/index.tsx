import { FileCard } from "@/components/FileCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SearchInput } from "@/components/ui/SearchInput";
import { ToggleButton } from "@/components/ui/ToggleButton";
import useDataStore, { FileStatus } from "@/store/useDataStore";
import { Status, useSearchStore } from "@/store/useSearchStore";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function SearchScreen() {
  const { searchText, status, setStatus } = useSearchStore();
  const { mockData } = useDataStore();
  const { logAnalyticsEvent } = useAnalytics();

  const filteredData = mockData.filter((item) => {
    const matchesStatus =
      status === Status.ALL ||
      (status === Status.OPEN && item.status === FileStatus.OPEN) ||
      (status === Status.CLOSED && item.status === FileStatus.CLOSED);

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const handlePressToggleButton = (status: Status) => {
    setStatus(status);
    logAnalyticsEvent("toggle_button_press", {
      status: status,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === "android" && <StatusBar barStyle="dark-content" />}
      <View style={styles.container}>
        <SearchInput />
        <View style={styles.toggleButtonContainer}>
          <ToggleButton
            title="Tümü"
            onPress={() => handlePressToggleButton(Status.ALL)}
            isActive={status === Status.ALL}
            style={styles.toggleButton}
          />
          <ToggleButton
            title="Açık"
            onPress={() => handlePressToggleButton(Status.OPEN)}
            isActive={status === Status.OPEN}
            style={styles.toggleButton}
          />
          <ToggleButton
            title="Kapalı"
            onPress={() => handlePressToggleButton(Status.CLOSED)}
            isActive={status === Status.CLOSED}
            style={styles.toggleButton}
          />
        </View>
        <FlatList
          data={filteredData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fileCardContainer}
          renderItem={({ item }) => (
            <FileCard file={item} style={styles.fileCard} />
          )}
        />
      </View>

      <PrimaryButton
        leftIcon={<Icon name="add" size={18} color="white" />}
        title="Dosya ekle"
        style={styles.addFileButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F0F0F0",
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 8 : 0,
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  toggleButtonContainer: {
    marginVertical: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    minWidth: "30%",
  },
  fileCard: {
    marginBottom: 16,
  },
  fileCardContainer: {
    paddingBottom: 50,
  },
  addFileButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    alignSelf: "flex-start",
  },
});
