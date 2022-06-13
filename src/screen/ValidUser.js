//basic
import React, { useState, useEffect} from 'react';
import {Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput, Alert, BackHandler } from 'react-native';

//style
import { basicStyle } from '../styles';

//navigation
import 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

const ValidUser = ({navigation, route}) => {

    const [validID, setValidID] = useState('');
    const [validPassword, setvalidPassword] = useState('');
    const [validErrorMessage, setValidErrorMessage] = useState('');

    useEffect(() => {
        setValidErrorMessage('');
      },[]);


      const InputValidID = (e) => {
        setValidID(e);
      }
    
      const InputValidPassword = (e) => {
        setvalidPassword(e);
      }  

    const editProfile = () => {
        //excist id & password --> valid success
        if(validID && validPassword){
          setValidErrorMessage('');
          navigation.navigate('EditProfile')
        }else{
          setValidErrorMessage('인증 실패: ID 또는 PW가 일치하지 않습니다.');
        }
      }

    const resetRoute = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Login'},
              ],
            })
          );
    }

    const process  = route.params.process;
        
    const validAndNext = () => {
        if(process == "editProfile"){
            editProfile();
            //navigation.navigate('EditProfile');
        }else if(process == "withdrawal"){
            Alert.alert(
                "회원 탈퇴 완료",
                "회원 탈퇴가 완료되었습니다. 로그인 화면으로 이동합니다.",
                [
                    { text: "확인", 
                        onPress: () => resetRoute()
                    }
                  ]
                )
        }
    }


    return(
    <SafeAreaView style={basicStyle.container}>
        <StatusBar style="auto" />
        <Text style={basicStyle.text}>유저 확인</Text>
        
        <TextInput style={basicStyle.textInput}
          placeholder="ID"
          onChangeText={InputValidID}
        >
        </TextInput>
        
        <TextInput style={basicStyle.textInput}
          placeholder="Password"
          onChangeText={InputValidPassword}
        >
        </TextInput>
        
        <Text style={basicStyle.errorText}>{validErrorMessage}</Text>
        
        <TouchableOpacity onPress={validAndNext} style={basicStyle.button}>
          <Text style={basicStyle.buttonText}>인증하기</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}
export default ValidUser;