import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect} from 'react';
import {theme} from './theme';
import 'react-native-gesture-handler';



const SignUp = ({navigation}) => {
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
    }

    const checkID = (e) => {
        if(id == "1"){
            setErrorMessage("중복된 아이디입니다!");
        }else{
            setErrorMessage("사용 가능한 아이디입니다.")
        }
    }

    const checkAddress = (e) => {
        setVisible(true);
    }
    
    const InputPassword = (e) => {
        setPassword(e);
    }

    const InputConfirmPassword = (e) => {
        setConfirmPassword(e);
    }

    const InputName = (e) => {
        setName(e);
    }

    const InputAddress = (e) => {
        setAddress(e);
    }

    const InputNum = (e) =>{
        setNum(e);
    }

    const checkNum = (e) => {

    }


    const back = () =>{
        navigation.navigate('Login');
    }

    return (
        <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <TextInput style={styles.textInput}
            placeholder="ID"
            maxLength={50}
            onChangeText={InputId}
            value={id}
        >
        </TextInput>

        <Text style={styles.errorText}>{errorMessage}</Text>

        <TouchableOpacity onPress={checkID} style={styles.button}>
            <Text style={styles.buttonText}>중복 확인</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}
            placeholder="Password"
            maxLength={50}
            onChangeText={InputPassword}
            value={password}
            secureTextEntry={true}
        >
        </TextInput>

        <TextInput style={styles.textInput}
            placeholder="Confirm password"
            maxLength={50}
            onChangeText={InputConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
        >
        </TextInput>

        <TextInput style={styles.textInput}
            placeholder="Name"
            maxLength={50}
            onChangeText={InputName}
            value={name}
        >
        </TextInput>

        <TextInput style={styles.textInput}
            placeholder="Phone Number"
            maxLength={50}
            onChangeText={InputAddress}
            value={address}
        >
        </TextInput>

        <TouchableOpacity onPress={checkAddress} style={styles.button}>
            <Text style={styles.buttonText}>동네 인증</Text>
        </TouchableOpacity>

        {visible && <TextInput style={styles.textInput}
            placeholder="인증번호"
            maxLength={50}
            onChangeText={InputNum}
            value={num}
        >
        </TextInput>}

        {visible &&
        <TouchableOpacity onPress={checkNum} style={styles.button}>
            <Text style={styles.buttonText}>인증하기</Text>
        </TouchableOpacity>}


        {/* <TouchableOpacity onPress={back} style={styles.button}>
            <Text style={styles.buttonText}>back</Text>
        </TouchableOpacity> */}

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
    color: 'black'
  } 
});

export default SignUp;