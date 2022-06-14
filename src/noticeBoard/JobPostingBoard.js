//basic
import React from 'react';
import { Image, View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

//navigation
import 'react-native-gesture-handler';

//style
import { boardStyle } from '../styles';

const DATA = [
    {
        id: '1',
        title: '게시물 1',
    },
    {
        id: '2',
        title: '게시물 2',
    },
    {
        id: '3',
        title: '게시물 3',
    },
];

const Item = ({ title }) => (
    <TouchableOpacity style={boardStyle.boardItem}>
        <Text style={boardStyle.title}>{title}</Text>
    </TouchableOpacity>
);

const JobPostingBoard = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )


    return (
        <SafeAreaView style={boardStyle.boardContainer}>
            <View style={boardStyle.boardTitle}>
                <TouchableOpacity style={boardStyle.arrow}
                    onPress={() => { navigation.navigate('Main') }}
                >
                    <Image
                        source={require('../img/left-arrow.png')}
                        style={boardStyle.arrow}
                    />
                </TouchableOpacity>


                <Text style={boardStyle.font}>구인 공고 게시판</Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <TouchableOpacity style={boardStyle.WriteItem}>
                <Text style={boardStyle.fontWrite}>글쓰기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default JobPostingBoard;