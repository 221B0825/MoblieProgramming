//basic
import React from "react";

//navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//screen
import InfoScreen from '../screen/InfoBoard';
import { ProfileStackNavigator } from "./StackNavigator";


const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
        // initialRouteName=""
    >
      <Drawer.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: '정보 공유 게시판',
          drawerLabel: '정보 공유 게시판',
          }}
      />

      <Drawer.Screen 
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          title: '내 프로필',
          drawerLabel: '내 프로필'
        }}
      />    
    </Drawer.Navigator>
  );
}



export { MainDrawerNavigator };