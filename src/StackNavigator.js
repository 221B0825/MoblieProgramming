import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawNavigator";

import LoginScreen from "./screen/Login";
import SignupScreen from "./screen/SignUp";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome'}}
          />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ title: 'SignUp'}}
          />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ title: 'Main'}}
          />
    </Stack.Navigator>
  );
}

export { StackNavigator };