import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Info from './screen/InfoBoard';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        // initialRouteName=""
    >
      <Drawer.Screen name="Info" component={Info} options={{drawerLabel: '정보 공유 게시판'}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;