import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer, useTheme } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";
import Icons from "~icons/.";

const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const textColor = theme["text-basic-color"];

  const closeDrawer = () => navigation.closeDrawer();

  const RenderHeader: React.FC = () => (
    <View
      style={{
        paddingVertical: 50,
        paddingHorizontal: 23,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity onPress={closeDrawer}>
        <Icons.Eva.CloseIcon width={30} height={30} fill={textColor} />
      </TouchableOpacity>
    </View>
  );

  return <Drawer header={<RenderHeader />}></Drawer>;
};

export default DrawerContent;
