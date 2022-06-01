//basic
import React, { useState, useEffect} from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//style
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import {theme, basicStyle} from '../styles';

//navigation
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
        <SafeAreaView style={basicStyle.container}>
        <StatusBar style="auto" />

        <TextInput style={basicStyle.textInput}
            placeholder="ID"
            maxLength={50}
            onChangeText={InputId}
            value={id}
        >
        </TextInput>

        <Text style={basicStyle.errorText}>{errorMessage}</Text>

        <TouchableOpacity onPress={checkID} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>중복 확인</Text>
        </TouchableOpacity>

        <TextInput style={basicStyle.textInput}
            placeholder="Password"
            maxLength={50}
            onChangeText={InputPassword}
            value={password}
            secureTextEntry={true}
        >
        </TextInput>

        <TextInput style={basicStyle.textInput}
            placeholder="Confirm password"
            maxLength={50}
            onChangeText={InputConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
        >
        </TextInput>

        <TextInput style={basicStyle.textInput}
            placeholder="Name"
            maxLength={50}
            onChangeText={InputName}
            value={name}
        >
        </TextInput>

        <TextInput style={basicStyle.textInput}
            placeholder="Phone Number"
            maxLength={50}
            onChangeText={InputAddress}
            value={address}
        >
        </TextInput>

        <TouchableOpacity onPress={checkAddress} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>동네 인증</Text>
        </TouchableOpacity>

        {visible && <TextInput style={basicStyle.textInput}
            placeholder="인증번호"
            maxLength={50}
            onChangeText={InputNum}
            value={num}
        >
        </TextInput>}

        {visible &&
        <TouchableOpacity onPress={checkNum} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>인증하기</Text>
        </TouchableOpacity>}


        {/* <TouchableOpacity onPress={back} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>back</Text>
        </TouchableOpacity> */}

        </SafeAreaView>
        </ThemeProvider>
    );
}

export default SignUp;