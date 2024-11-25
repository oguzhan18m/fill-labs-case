import { useRouter } from "expo-router";
import { DetailPageTabs } from "@/app/(tabs)/(search)/details";
import useDataStore, { FileStatus } from "@/store/useDataStore";
import { StyleSheet, View } from "react-native";
import { useRef } from "react";
import { MenuView } from "@react-native-menu/menu";

import Icon from "@expo/vector-icons/MaterialIcons";

interface DropDownProps {
  itemId: number;
}

export const FileCardDropDown = ({ itemId }: DropDownProps) => {
  const router = useRouter();
  const menuRef = useRef<any>(null);
  const { mockData, toggleStatus } = useDataStore();
  const file = mockData.find((data) => data.id === itemId);

  const handlePressAction = ({ nativeEvent }: { nativeEvent: any }) => {
    console.log("nativeEvent", JSON.stringify(nativeEvent));
    switch (nativeEvent.event) {
      case "go-detail":
        handleItemPress(itemId, DetailPageTabs.INFO);
        break;
      case "change-status-file":
        handleChangeStatus();
        break;
      case "go-tab-b":
        handleItemPress(itemId, DetailPageTabs.TAB_B);
        break;
      case "go-tab-c":
        handleItemPress(itemId, DetailPageTabs.TAB_C);
        break;
      default:
        break;
    }
  };

  const handleItemPress = (id: number, tab: DetailPageTabs) => {
    console.log("item press", id, tab);
    router.push(`/(tabs)/details?tab=${tab}&id=${id}` as any);
  };

  const handleChangeStatus = () => {
    toggleStatus(itemId);
  };

  return (
    <MenuView
      title="Menu Title"
      onPressAction={handlePressAction}
      actions={[
        {
          id: "go-detail",
          title: "Dosya detayına git",
          titleColor: "#171D1E",
        },
        {
          id: "change-status-file",
          title:
            file?.status === FileStatus.OPEN ? "Dosyayı kapat" : "Dosyayı aç",
          titleColor: "#171D1E",
        },
        {
          id: "go-tab-b",
          title: "TAB B'ye git",
          titleColor: "#171D1E",
        },
        {
          id: "go-tab-c",
          title: "TAB C'ye git",
          titleColor: "#171D1E",
        },
      ]}
      shouldOpenOnLongPress={false}
    >
      <View style={styles.button}>
        <Icon
          name="more-vert"
          size={20}
          onPress={() => menuRef.current?.show()}
        />
      </View>
    </MenuView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
