//basic
import React from 'react';
import {View, FlatList, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

//navigation
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

//style
import { basicStyle } from '../styles';

const Withdrawal =({navigation}) => {

    const withdrawalUser = (e) => {
        navigation.navigate('ValidUser', {process: "withdrawal"});
    }

    return(
        <SafeAreaView style={basicStyle.container}>
            <Text style={[basicStyle.errorText, {fontSize: 30}]}>&lt;주의&gt;</Text>
            <ScrollView>
            <Text style={basicStyle.text}>사용자 탈퇴 시,해당 아이디는 재사용 및 복구할 수 없으며,
            탈퇴 이후에도 등록한 게시물 및 댓글은 자동으로 삭제되지 않습니다.
            또한, 탈퇴로 인하여 발생하는 불이익에 대해서
            ‘Dorf der Liebe’는 어떤 책임도 지지 않음을 밝힙니다.{"\n"}{"\n"}
            하단의 ‘사용자 탈퇴’를 클릭하면 위 주의사항을 숙지한 것으로 간주하며,
            탈퇴를 위한 인증을 진행합니다.</Text>
            </ScrollView>
            <TouchableOpacity onPress={withdrawalUser} style={basicStyle.button}>
            <Text style={basicStyle.buttonText}>회원 탈퇴</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Withdrawal;