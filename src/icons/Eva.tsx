import { Icon } from "@ui-kitten/components";
import { ImageProps } from "react-native";

type Props = Partial<ImageProps> & { fill?: string };

export const SearchIcon = (props?: Props) => (
  <Icon {...props} name="search-outline" />
);

export const MenuIcon = (props?: Props) => (
  <Icon {...props} name="menu-outline" />
);

export const CloseIcon = (props?: Props) => (
  <Icon {...props} name="close-outline" />
);

export const ChevronDownIcon = (props?: Props) => (
  <Icon {...props} name="chevron-down-outline" />
);

export const ListIcon = (props?: Props) => (
  <Icon {...props} name="list-outline" />
);

export const GridIcon = (props?: Props) => (
  <Icon {...props} name="grid-outline" />
);
