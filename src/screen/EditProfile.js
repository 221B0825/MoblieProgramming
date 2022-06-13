//basic
import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';

//style
import { basicStyle, ProfileStyle } from '../styles';
import { CommonActions } from '@react-navigation/native';

//navigation
import 'react-native-gesture-handler';

const EditProfile = ({navigation}) => {

    const resetRoute = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Profile'},
              ],
            })
          );
    }

    const finishEdit =() => {
        Alert.alert(
            "수정 완료",
            "변경사항이 저장되었습니다",
            [
                {
                    text: "확인",
                    onPress: ()=> resetRoute()
                }
            ]
        )
    }

    return(
        <SafeAreaView style={ProfileStyle.container}>
            <Text style={basicStyle.text}>가나다 님의 프로필</Text>

            <ScrollView>
            <SafeAreaView style={ProfileStyle.subContainer}>
                <SafeAreaView style={basicStyle.row}>
                    <Text style={ProfileStyle.subText}>아이디</Text>
                    <Text style={basicStyle.errorText}>  *아이디는 수정 불가</Text>
                </SafeAreaView>
            <Text style={basicStyle.textInput}>rkskek12</Text>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>닉네임</Text>
            <TextInput style={basicStyle.textInput}>가나다</TextInput>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>이메일</Text>
            <TextInput style={basicStyle.textInput}>ganada@gmail.com</TextInput>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>비밀번호</Text>
            <TextInput
                secureTextEntry={true}
                style={basicStyle.textInput}>rkskekfk</TextInput>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>비밀번호 확인</Text>
            <TextInput 
                secureTextEntry={true}
                style={basicStyle.textInput}>rkskekfk</TextInput>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>동네 정보</Text>
            <TextInput style={basicStyle.textInput}>독일 어딘가</TextInput>
            </SafeAreaView>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.text}>나의 이력서</Text>
            <SafeAreaView style={basicStyle.row}>
                <Text style={[basicStyle.textInput, {width: 150}]}>이력서제목.pdf</Text>
                <TouchableOpacity style={ProfileStyle.smallButton}>
                    <Text style={basicStyle.buttonText}>업로드</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ProfileStyle.smallButton}>    
                    <Text style={basicStyle.buttonText} >삭제</Text>
                </TouchableOpacity>
            </SafeAreaView>
            </SafeAreaView>

            <TouchableOpacity onPress={finishEdit} style={basicStyle.button}>
                <Text style={basicStyle.buttonText}>수정 완료</Text>
            </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile;