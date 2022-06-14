//basic
import React from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawNavigator";

//screens
import LoginScreen from "../screen/Login";
import SignupScreen from "../screen/SignUp";
import NoticeBoard from "../noticeBoard/NoticeBoard"
import InfoBoard from "../noticeBoard/InfoBoard"
import QABoard from "../noticeBoard/QABoard"
import FreeBoard from "../noticeBoard/FreeBoard"
import UseTradeBoard from "../noticeBoard/UseTradeBoard"
import JobPostingBoard from "../noticeBoard/JobPostingBoard"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'SignUp',
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{
          title: 'Main',

        }}
      />
      <Stack.Screen
        name="NoticeBoard"
        component={NoticeBoard}
        options={{
          title: 'NoticeBoard',

        }}
      />
      <Stack.Screen
        name="InfoBoard"
        component={InfoBoard}
        options={{
          title: 'FreeBoard',

        }}
      />
      <Stack.Screen
        name="QABoard"
        component={QABoard}
        options={{
          title: 'QABoard',

        }}
      />
      <Stack.Screen
        name="FreeBoard"
        component={FreeBoard}
        options={{
          title: 'FreeBoard',

        }}
      />
      <Stack.Screen
        name="UseTradeBoard"
        component={UseTradeBoard}
        options={{
          title: 'UseTradeBoard',

        }}
      />
      <Stack.Screen
        name="JobPostingBoard"
        component={JobPostingBoard}
        options={{
          title: 'JobPostingBoard',

        }}
      />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{ headerShown: false}}>
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
        }}
      />   
      
      <Stack.Screen
        name="ValidUser"
        component={ValidUserScreen} 
        options={{
          title: "",
          headerShown: true,
        }}

      />

      <Stack.Screen
        name="Withdrawal"
        component={WithdrawalScreen} 
        options={{
          title: "회원 탈퇴",
          headerShown: true,
        }}

      />

      <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        title: "",
        headerShown: false,
      }}
      />

    </Stack.Navigator>
  )
}

export { StackNavigator, ProfileStackNavigator };
