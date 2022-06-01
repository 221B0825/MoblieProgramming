import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  red: '#e84118',
  inputText: '#F0EDEB', 
  button_accessible: '#B38D79',
  button_Inaccessible: '#A3A2A0', 
  brown_bright: '#F0BDA3', 
  brown_dark: '#706F6E', 
}

export const theme = {
  background: colors.white,
  text: colors.black,
}

export const basicStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      margin: 30,
      fontSize: 30
    },
    button: {
      backgroundColor: colors.button_accessible,
      margin: 10,
      padding: 10,
      width: 100,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: colors.white,
    },
    errorText: {
      fontSize: 20,
      color: colors.red,
    },
    row : {
      flexDirection: 'row',
    } 
});

export const boardStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.white,
  },

  item: {
    backgroundColor: colors.inputText,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});