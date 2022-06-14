//basic
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native';

//style
import { ThemeProvider } from 'styled-components';
import { theme, basicStyle } from '../styles';

//navigation
import 'react-native-gesture-handler';

const Login = ({ navigation }) => {

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [id]);

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
      <SafeAreaView style={basicStyle.container}>
        <StatusBar style="auto" />

        <Text style={basicStyle.text}>로그인</Text>
        <Text style={basicStyle.errorText}>{errorMessage}</Text>

        <TextInput style={basicStyle.textInput}
          placeholder="ID"
          maxLength={50}
          onChangeText={InputId}
          value={id}
        >
        </TextInput>
        <TextInput style={basicStyle.textInput}
          placeholder="Password"
          maxLength={50}
          onChangeText={InputPassword}
          value={password}
          secureTextEntry={true}
        >
        </TextInput>
        <SafeAreaView style={basicStyle.row}>
          <TouchableOpacity onPress={login} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signUp} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>회원가입</Text>
          </TouchableOpacity>
        </SafeAreaView>


      </SafeAreaView>
    </ThemeProvider>
  );
}

export default Login;