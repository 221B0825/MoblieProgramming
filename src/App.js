//basic
import React, { useState }  from 'react';
import { StatusBar } from 'react-native';

//style
import { ThemeProvider } from 'styled-components';
import {theme} from "./styles";

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from '../src/navigator/StackNavigator';

const Stack = createStackNavigator();

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle='dark-content'></StatusBar>
            <NavigationContainer>
                <StackNavigator
                />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App; 