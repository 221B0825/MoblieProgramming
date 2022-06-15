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
        <Text style={boardStyle.font}>{title}</Text>
    </TouchableOpacity>
);

const NoticeBoard = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )


    return (
        <SafeAreaView style={boardStyle.boardContainer}>
            <View style={boardStyle.boardTitle}>
                <TouchableOpacity style={boardStyle.arrow}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        source={require('../img/left-arrow.png')}
                        style={boardStyle.arrow}
                    />
                </TouchableOpacity>

                <View style={boardStyle.title}><Text style={boardStyle.font}>정부기관 공지 게시판</Text></View>

                <View style={{ flex: 1 }} />
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <TouchableOpacity style={boardStyle.WriteItem}
                onPress={() => { navigation.navigate('Write') }}
            >
                <Text style={boardStyle.fontWrite}>글쓰기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default NoticeBoard;