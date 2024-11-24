import * as DropdownMenu from "zeego/dropdown-menu";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { DetailPageTabs } from "@/app/(tabs)/(search)/details";
import useDataStore, { FileStatus } from "@/store/useDataStore";

interface DropDownProps {
  itemId: number;
}

export const FileCardDropDown = ({ itemId }: DropDownProps) => {
  const router = useRouter();
  const { mockData, toggleStatus } = useDataStore();
  const file = mockData.find((data) => data.id === itemId);

  const handleItemPress = (id: number, tab: DetailPageTabs) => {
    router.push(`/(tabs)/details?tab=${tab}&id=${id}` as any);
  };

  const handleChangeStatus = () => {
    toggleStatus(itemId);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Icon name="more-vert" size={30} color="black" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label
          placeholder="Options"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Seçenekler
        </DropdownMenu.Label>

        <DropdownMenu.Item
          key="item-1"
          onSelect={() => handleItemPress(itemId, DetailPageTabs.INFO)}
        >
          <DropdownMenu.ItemTitle>Dosya detayına git</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>

        <DropdownMenu.Item key="item-2" onSelect={handleChangeStatus}>
          <DropdownMenu.ItemTitle>
            {file?.status === FileStatus.OPEN ? "Dosyayı kapat" : "Dosyayı aç"}
          </DropdownMenu.ItemTitle>
        </DropdownMenu.Item>

        <DropdownMenu.Item
          key="item-3"
          onSelect={() => handleItemPress(itemId, DetailPageTabs.TAB_B)}
        >
          <DropdownMenu.ItemTitle>Tab B'ye git</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>

        <DropdownMenu.Item
          key="item-4"
          onSelect={() => handleItemPress(itemId, DetailPageTabs.TAB_C)}
        >
          <DropdownMenu.ItemTitle>Tab C'ye git</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
