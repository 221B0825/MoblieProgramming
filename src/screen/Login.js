import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect} from 'react';
import {theme} from '../theme';
import 'react-native-gesture-handler';




const Login = ({navigation}) => {

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    setErrorMessage('');
  },[id]);

  const InputId = (e) => {
    console.log(e)
    setId(e);
  }

  const InputPassword = (e) => {
    setPassword(e);
  }

  // Press loginButton
  const login = (e) => {
    //excist id & password --> login success
    setErrorMessage(id && password ? 'login success' : 'login fail')
    // Move to DrawNavigator
    navigation.navigate('Main');
  }

  const signUp = () => {
    setErrorMessage('');
    navigation.navigate('SignUp');
  }

  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>로그인</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      
      <TextInput style={styles.textInput}
        placeholder="ID"
        maxLength={50}
        onChangeText={InputId}
        value={id}
      >
      </TextInput>
      <TextInput style={styles.textInput}
        placeholder="Password"
        maxLength={50}
        onChangeText={InputPassword}
        value={password}
        secureTextEntry={true}
      >
      </TextInput>
      <SafeAreaView style={styles.row}>
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </SafeAreaView>
      

    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#B38D79',
    margin: 10,
    padding: 10,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
  errorText: {
    fontSize: 20,
    color: 'red'
  },
  row : {
    flexDirection: 'row',
  } 
});

export default Login;