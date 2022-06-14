//basic
import React from 'react';
import {View, FlatList, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

//style
import { basicStyle, ProfileStyle } from '../styles';

//navigation
import 'react-native-gesture-handler';

const Profile = ({ navigation }) => {

    const editUser = (e) => {
        navigation.navigate('ValidUser', {process: "editProfile"});
    }
    
    const withdrawalUser = (e) => {
        navigation.navigate('Withdrawal', {process: "withdrawal"});
    }
    
    return(
        
        <SafeAreaView style={ProfileStyle.container}>
            <Text style={basicStyle.text}>가나다 님의 프로필</Text>

            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>닉네임</Text>
            <Text style={basicStyle.textInput}>가나다</Text>
            </SafeAreaView>
            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>이메일</Text>
            <Text style={basicStyle.textInput}>ganada@gmail.com</Text>
            </SafeAreaView>
            <SafeAreaView style={ProfileStyle.subContainer}>
            <Text style={ProfileStyle.subText}>동네 정보</Text>
            <Text style={basicStyle.textInput}>독일 어딘가</Text>
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

            <TouchableOpacity onPress={editUser} style={basicStyle.button}>
                <Text style={basicStyle.buttonText}>내 정보 변경하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={withdrawalUser} style={basicStyle.button}>
                <Text style={basicStyle.buttonText}>    사용자 탈퇴    </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Profile;
