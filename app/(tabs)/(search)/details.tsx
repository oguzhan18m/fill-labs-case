import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  useWindowDimensions,
  Platform,
  StatusBar,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Typography } from "@/components/ui/Typography";
import { Chip } from "@/components/ui/Chip";
import { FileDetail } from "@/components/FileDetail";
import { TabB } from "@/components/TabB";
import { TabC } from "@/components/TabC";
import { FileDetailScreenDropDown } from "@/components/FileDetailScreenDropDown";
import useDataStore from "@/store/useDataStore";

export enum DetailPageTabs {
  INFO = "info",
  TAB_B = "tab-b",
  TAB_C = "tab-c",
}

const renderScene = SceneMap({
  [DetailPageTabs.INFO]: FileDetail,
  [DetailPageTabs.TAB_B]: TabB,
  [DetailPageTabs.TAB_C]: TabC,
});

const routes = [
  { key: DetailPageTabs.INFO, title: "Bilgiler" },
  { key: DetailPageTabs.TAB_B, title: "Tab B" },
  { key: DetailPageTabs.TAB_C, title: "Tab C" },
];

export default function SearchDetailScreen() {
  const router = useRouter();
  const { tab, id } = useLocalSearchParams();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const file = useDataStore((state) =>
    state.mockData.find((data) => data.id === Number(id))
  );

  useEffect(() => {
    if (tab) {
      setIndex(routes.findIndex((route) => route.key === tab));
    }
  }, [tab]);

  if (!file) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === "android" && <StatusBar barStyle="dark-content" />}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => router.back()}
          />
          <View style={styles.headerTitleContainer}>
            <Typography
              title="Dosya Bilgileri"
              variant="body"
              size="lg"
              style={styles.headerTitle}
            />
            <Typography
              title={`${file.title} - ${file.id}`}
              variant="body"
              size="sm"
              style={styles.headerSubtitle}
            />
          </View>
        </View>

        <View style={styles.headerRight}>
          <Chip status={file?.status} />
          <FileDetailScreenDropDown itemId={Number(id)} />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        tabBarPosition="top"
        tabIndex={0}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.tabView}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.label}
            activeColor="#2F54EB"
            inactiveColor="#757575"
          />
        )}
      />
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
  tabView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitleContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
  },
  headerTitle: {
    marginLeft: 10,
  },
  headerSubtitle: {
    marginLeft: 10,
  },
  tabBar: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "#2F54EB",
    height: 2,
  },
  label: {
    fontWeight: "bold",
  },
});
