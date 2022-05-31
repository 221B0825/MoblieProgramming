import React, { useState }  from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen  from './screen/Login';
import SignupScreen from './screen/SignUp';
import MainScreen from './screen/Main'; 


const Stack = createStackNavigator();

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle='dark-content'></StatusBar>
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen
                    name="SignUp"
                    component={SignupScreen}
                    options={{ title: 'SignUp'}}
                    />
                    <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ title: 'Main'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App; 