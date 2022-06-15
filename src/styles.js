import { StyleSheet } from 'react-native';
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
  row: {
    flexDirection: 'row',
  }
});
//board 스타일
export const boardStyle = StyleSheet.create({
  boardContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  item: {
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    width: 260,
    height: 40,
    top: 0,
    marginVertical: 3,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: colors.brown_bright,
    borderColor: colors.brown_bright
  },

  boardItem: {
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    width: 260,
    height: 40,
    top: 0,
    marginVertical: 0.7,
    marginHorizontal: 1,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: colors.brown_bright,
    borderColor: colors.brown_bright
  },

  WriteItem: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: colors.brown_bright,
    borderColor: colors.brown_bright,
    marginBottom: 140
  },

  boardTitle: {
    marginBottom: 40,
    flexDirection: 'row',
  },

  title: {
    flex: 3,
    alignItems: 'center',
  },

  font: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  fontWrite: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },

  arrow: {
    alignItems: 'flex-end',
    flex: 1,
    width: 26,
    height: 26,
  },

  textInputTitle: {
    height: 40,
    width: 300,
    margin: 0.8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.inputText,
  },

  textInputContent: {
    textAlignVertical: 'top',
    height: 450,
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.inputText,
  },

  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 240,
    width: 50,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.brown_bright,
    borderColor: colors.brown_bright,
  },

  jobButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 240,
    width: 80,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.brown_bright,
    borderColor: colors.brown_bright,
  }

});

export const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  subContainer: {
    alignItems: 'flex-start',
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


  // board: {
  //   width: 350,
  //   height: 58,
  //   alignItems: 'center',
  //   top: 0,
  //   borderColor: colors.brown_bright,
  //   backgroundColor: colors.brown_bright,
  //   borderWidth: 2,
  //   borderRadius: 10,

  // },