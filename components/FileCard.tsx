import { View, StyleSheet, ViewStyle } from "react-native";
import { Typography } from "./ui/Typography";
import { Chip } from "./ui/Chip";
import Icon from "@expo/vector-icons/MaterialIcons";
import DashedLine from "react-native-dashed-line";
import { FileCardDropDown } from "./FileCardDropDown";
import moment from "moment";
import { FileItem, FileStatus } from "@/store/useDataStore";

export type FileCardProps = {
  file: FileItem;
  style?: ViewStyle;
};

export function FileCard({ style, file }: FileCardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            file.status === FileStatus.OPEN ? "#EAEEFD" : "#E8E8E8",
          borderColor: file.status === FileStatus.OPEN ? "#2F54EB" : "#BABABA",
        },
        style,
      ]}
    >
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Typography title={file.title} variant="title" size="lg" />
            <Icon
              name="copy-all"
              size={22}
              color="black"
              style={styles.copyIcon}
            />
            <Chip status={file.status} />
          </View>
          {/* FileCard DropDown Menu */}
          <FileCardDropDown itemId={file.id} />
        </View>
        <Typography
          title={`${file.numeric1} • ${file.text1}`}
          variant="body"
          size="md"
          style={{ textAlign: "left" }}
        />
      </View>
      <DashedLine
        dashThickness={1}
        dashLength={10}
        dashColor={file.status === FileStatus.OPEN ? "#2F54EB" : "#BABABA"}
        style={styles.divider}
      />
      <View style={styles.bottomContainer}>
        <Typography
          title={`${file.numeric2} • ${file.text2}`}
          variant="body"
          size="md"
          style={{ textAlign: "left" }}
        />
        <Typography
          title={`${file.numeric2} • ${moment(file.date).format(
            "DD MMM YYYY"
          )}`}
          variant="body"
          size="md"
          style={{ textAlign: "left" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  topContainer: {
    paddingHorizontal: 16,
  },
  bottomContainer: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  copyIcon: {
    marginHorizontal: 8,
  },
  moreIcon: {},
  divider: {
    marginVertical: 12,
  },
});
