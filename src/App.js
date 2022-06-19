//basic
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
LogBox.ignoreLogs(['Require cycle:']);

//style
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { FirstStackNavigator } from '../src/navigator/StackNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <NavigationContainer>
        <FirstStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
