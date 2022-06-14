import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Board from '../noticeBoard/Board'
import Profile from '../screen/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // initialRouteName=""
    >

      <Drawer.Screen
        name="Board"
        component={Board}
        options={{
          title: '게시판',
          drawerLabel: '게시판'
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '내 프로필',
          drawerLabel: '내 프로필'
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;