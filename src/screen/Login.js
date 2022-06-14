//basic
import React, { useState, useEffect} from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

//style
import { ThemeProvider } from 'styled-components';
import { theme, basicStyle } from '../styles';

//navigation
import 'react-native-gesture-handler';

const Login = ({navigation}) => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  useEffect(() => {
    setLoginErrorMessage('');
  },[id]);

  const InputId = (e) => {
    setId(e);
  }

  const InputPassword = (e) => {
    setPassword(e);
  }

  // Press loginButton
  const login = (e) => {
    //excist id & password --> login success
    if(id && password){
      setLoginErrorMessage('');
      navigation.navigate('Main');
    }else{
      setLoginErrorMessage('로그인 실패: ID 또는 PW가 일치하지 않습니다.');
    }
  }

  const signUp = () => {
    setLoginErrorMessage('');
    navigation.navigate('SignUp');
  }

  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView style={basicStyle.container}>
      <StatusBar style="auto" />

      <Text style={basicStyle.text}>로그인</Text>
      <Text style={basicStyle.errorText}>{loginErrorMessage}</Text>
      
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
