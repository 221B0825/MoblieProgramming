//basic
import React from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawNavigator";

//screens
import LoginScreen from "../screen/Login";
import SignupScreen from "../screen/SignUp";

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
    </Stack.Navigator>
  );
}

export { StackNavigator };