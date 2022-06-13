import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import Styled from 'styled-components';

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
      padding: 10,
      borderRadius: 10,
      backgroundColor: colors.inputText,
    },
    text: {
      margin: 20,
      fontSize: 25,
    },
    button: {
      backgroundColor: colors.button_accessible,
      margin: 10,
      padding: 10,
      paddingHorizontal: 40,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: colors.white,
    },
    errorText: {
      fontSize: 15,
      color: colors.red,
    },
    row : {
      flexDirection: 'row',
    } 
});

export const boardStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  item: {
    backgroundColor: colors.brown_bright,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  subContainer: {
    alignItems:'flex-start',
  },
  subText: {
    paddingLeft: 10,
    fontSize: 20,
  },

  text: {
    fontSize: 20,
  },
  smallButton: {
    backgroundColor: colors.button_accessible,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    height: 40,
    borderRadius: 5,
  }

});
