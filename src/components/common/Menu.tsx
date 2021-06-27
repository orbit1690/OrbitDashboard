import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SvgIconTypeMap,
  IconButton,
} from "@material-ui/core";

import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SettingsIcon from "@material-ui/icons/Settings";
import OrbitLogo from "../../assets/OrbitLogo";

import { useToggle } from "../../utils/Hooks";

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

export enum Tab {
  Match = "Match",
  Settings = "Settings",
}

interface MenuProps {
  readonly setTab: (tab: Tab) => void;
}

const menuList: [Tab, Icon][] = [
  [Tab.Match, SportsEsportsIcon],
  [Tab.Settings, SettingsIcon],
];

const Menu = (props: MenuProps): JSX.Element => {
  const [menuOpened, toggleMenu] = useToggle();

  return (
    <>
      <IconButton edge="start" onClick={toggleMenu}>
        <OrbitLogo />
      </IconButton>

      <Drawer anchor="left" open={menuOpened} onClose={toggleMenu}>
        <List>
          {menuList.map(
            ([tab, Icon], index: number): JSX.Element => (
              <ListItem
                button
                onClick={(): void => {
                  toggleMenu();
                  props.setTab(tab);
                }}
                key={index}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={tab} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
