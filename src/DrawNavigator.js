import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Info from './screen/InfoBoard';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        // initialRouteName=""
    >
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{
          title: '정보 공유 게시판',
          drawerLabel: '정보 공유 게시판'}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;