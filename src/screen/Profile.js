//basic
import React from 'react';
import {View, FlatList, Text, SafeAreaView, StatusBar } from 'react-native';

//navigation
import 'react-native-gesture-handler';

//style
import { theme, basicStyle } from '../styles';

const Profile = ({ navigation }) => {
    return(
        <SafeAreaView style={basicStyle.container}>
            <Text style={basicStyle.text}>
                프로필
            </Text>
        </SafeAreaView>
    )
}

export default Profile;