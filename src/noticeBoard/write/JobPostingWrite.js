//basic
import React, { useState } from 'react';
import { Image, View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

//navigation
import 'react-native-gesture-handler';

//style
import { boardStyle } from '../../styles';


const JobPostingWrite = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const InputTitle = (e) => {
        setTitle(e);
    }

    const InputContent = (e) => {
        setContent(e);
    }

    return (
        <SafeAreaView style={boardStyle.boardContainer}>
            <View style={boardStyle.boardTitle}>
                <TouchableOpacity style={boardStyle.arrow}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        source={require('../../img/left-arrow.png')}
                        style={boardStyle.arrow}
                    />
                </TouchableOpacity>

                <View style={boardStyle.title}><Text style={boardStyle.font}>구인공고</Text></View>
                <View style={{ flex: 1 }} />
            </View>

            <View>
                <TextInput
                    style={boardStyle.textInputTitle}
                    placeholder="제목"
                    placeholderTextColor='black'
                    maxLength={40}
                    onChangeText={InputContent}
                />
            </View>

            <View>
                <TextInput

                    multiline
                    style={boardStyle.textInputContent}
                    placeholder="내용을 입력하세요"
                    maxLength={1000}
                    onChangeText={InputTitle}
                    placeholderTextColor='black'
                    numberOfLines={30}
                />
            </View>

            <TouchableOpacity style={boardStyle.jobButton}
                onPress={() => { navigation.goBack() }}
            >
                <Text style={boardStyle.fontWrite}>요청하기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export default JobPostingWrite;
