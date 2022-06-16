//basic
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

//style
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import { theme, basicStyle } from '../styles';

//navigation
import 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

const SignUp = ({ navigation }) => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [num, setNum] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const [visible, setVisible] = React.useState(false);

  const InputId = (e) => {
    console.log(e);
    setId(e);
  };

  const checkID = (e) => {
    if (id == '1') {
      setErrorMessage('중복된 아이디입니다!');
    } else {
      setErrorMessage('사용 가능한 아이디입니다.');
    }
  };

  const checkAddress = (e) => {
    setVisible(true);
  };

  const InputPassword = (e) => {
    setPassword(e);
  };

  const InputConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  const InputName = (e) => {
    setName(e);
  };

  const InputAddress = (e) => {
    setAddress(e);
  };

  const InputNum = (e) => {
    setNum(e);
  };

  const checkNum = (e) => {};

  const resetRoute = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }],
      })
    );
  };

  const addUser = () => {
    Alert.alert(
      '회원 가입 완료',
      '회원 가입이 완료되었습니다. 로그인 화면으로 이동합니다.',
      [{ text: '확인', onPress: () => resetRoute() }]
    );
  };

  const back = () => {
    navigation.navigate('Login');
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={basicStyle.container}>
        <StatusBar style="auto" />

        <TextInput
          style={basicStyle.textInput}
          placeholder="ID"
          maxLength={50}
          onChangeText={InputId}
          value={id}
        ></TextInput>

        <Text style={basicStyle.errorText}>{errorMessage}</Text>

        <TouchableOpacity onPress={checkID} style={basicStyle.button}>
          <Text style={basicStyle.buttonText}>중복 확인</Text>
        </TouchableOpacity>

        <TextInput
          style={basicStyle.textInput}
          placeholder="Password"
          maxLength={50}
          onChangeText={InputPassword}
          value={password}
          secureTextEntry={true}
        ></TextInput>

        <TextInput
          style={basicStyle.textInput}
          placeholder="Confirm password"
          maxLength={50}
          onChangeText={InputConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
        ></TextInput>

        <TextInput
          style={basicStyle.textInput}
          placeholder="Name"
          maxLength={50}
          onChangeText={InputName}
          value={name}
        ></TextInput>

        <TextInput
          style={basicStyle.textInput}
          placeholder="Phone Number"
          maxLength={50}
          onChangeText={InputAddress}
          value={address}
        ></TextInput>

        <TouchableOpacity onPress={addUser} style={basicStyle.button}>
          <Text style={basicStyle.buttonText}>가입하기</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default SignUp;
