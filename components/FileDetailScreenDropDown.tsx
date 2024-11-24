import * as DropdownMenu from "zeego/dropdown-menu";
import Icon from "@expo/vector-icons/MaterialIcons";
import useDataStore, { FileStatus } from "@/store/useDataStore";

interface FileDetailScreenDropDownProps {
  itemId: number;
}

export const FileDetailScreenDropDown = ({
  itemId,
}: FileDetailScreenDropDownProps) => {
  const { mockData, toggleStatus } = useDataStore();
  const file = mockData.find((data) => data.id === itemId);

  const handleChangeStatus = () => {
    toggleStatus(itemId);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Icon
          name="more-vert"
          size={30}
          color="black"
          style={{ marginLeft: 12 }}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item key="detail-page" onSelect={handleChangeStatus}>
          <DropdownMenu.ItemTitle>
            {file?.status === FileStatus.OPEN ? "Dosyayı kapat" : "Dosyayı aç"}
          </DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
