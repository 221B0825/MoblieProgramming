//basic
import React from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import { MainDrawerNavigator } from "./DrawNavigator";

//screens
import LoginScreen from "../screen/Login";
import SignupScreen from "../screen/SignUp";
import ProfileScreen from "../screen/Profile";
import ValidUserScreen from "../screen/ValidUser";
import WithdrawalScreen from "../screen/Withdrawal";
import EditProfileScreen from "../screen/EditProfile";

const Stack = createStackNavigator();

const FirstStackNavigator = () => {
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
          component={MainDrawerNavigator}
          options={{
            title: 'Main',
            
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
          title: "",
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

export { FirstStackNavigator, ProfileStackNavigator };