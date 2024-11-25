import useDataStore, { FileStatus } from "@/store/useDataStore";
import { StyleSheet, View } from "react-native";
import { useRef } from "react";
import { MenuView } from "@react-native-menu/menu";
import Icon from "@expo/vector-icons/MaterialIcons";

interface Props {
  itemId: number;
}

export const FileDetailScreenDropDown = ({ itemId }: Props) => {
  const menuRef = useRef<any>(null);
  const { mockData, toggleStatus } = useDataStore();
  const file = mockData.find((data) => data.id === itemId);

  const handlePressAction = ({ nativeEvent }: { nativeEvent: any }) => {
    switch (nativeEvent.event) {
      case "change-status-file":
        handleChangeStatus();
        break;

      default:
        break;
    }
  };

  const handleChangeStatus = () => {
    toggleStatus(itemId);
  };

  return (
    <MenuView
      //@ts-ignore
      ref={menuRef}
      title="Menu Title"
      onPressAction={handlePressAction}
      actions={[
        {
          id: "change-status-file",
          title:
            file?.status === FileStatus.OPEN ? "Dosyayı kapat" : "Dosyayı aç",
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
