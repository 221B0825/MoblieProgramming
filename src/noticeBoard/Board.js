//basic
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

//style

//navigation
import 'react-native-gesture-handler';

//style
import { boardStyle } from '../styles';

const DATA_Board = [
    {
        id: '1',
        title: '정부기관 공지 게시판',
    },
    {
        id: '2',
        title: '정보 공유 게시판',
    },
    {
        id: '3',
        title: 'Q&A 게시판',
    },
    {
        id: '4',
        title: '자유게시판',
    },
    {
        id: '5',
        title: '중고 거래 게시판',
    },
    {
        id: '6',
        title: '구인 공고 게시판',
    },
];

const DATA_Search = [
    {
        id: '1',
        title: '특정 게시판 검색',
    },
    {
        id: '2',
        title: '전체 게시판 검색',
    },
];

const DATA_Manage = [
    {
        id: '1',
        title: '커뮤니티 관리',
    },
    {
        id: '2',
        title: '사용자 신상정보 및 계정 관리',
    },
    {
        id: '3',
        title: '사용자 로그인 정보 관리',
    },
];



const Board = ({ navigation }) => {

    const [boardTitle, setBoardTitle] = useState('')

    const Item = ({ title }) => (
        <TouchableOpacity
            style={boardStyle.item}
            onPress={() => {
                setBoardTitle(title)
                setBoard
            }}>
            <Text style={boardStyle.title}>{title}</Text>
        </TouchableOpacity >
    );

    const renderItem = ({ item }) => (
        <Item title={item.title}
        />

    )

    const setBoard = () => {
        naviBoard()
        setBoardTitle('')
    };

    const naviBoard = () => {

        switch (boardTitle) {
            case '정부기관 공지 게시판':
                navigation.navigate('NoticeBoard');
                break;

            case '정보 공유 게시판':
                navigation.navigate('InfoBoard');
                console.log("이동2")
                break;

            case 'Q&A 게시판':
                navigation.navigate('QABoard');
                console.log("이동3")
                break;

            case '자유게시판':
                navigation.navigate('FreeBoard');
                console.log("이동4")
                break;

            case '중고 거래 게시판':
                navigation.navigate('UseTradeBoard');
                console.log("이동5")
                break;

            case '구인 공고 게시판':
                navigation.navigate('JobPostingBoard');
                console.log("이동6")
                break;
        }

    }

    useEffect(() => {
        setBoard()
    }, [boardTitle])

    return (
        <SafeAreaView style={boardStyle.container}>
            <FlatList
                data={DATA_Board}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />

            <FlatList
                data={DATA_Search}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Text style={boardStyle.font}> 관리 </Text>
            <FlatList
                data={DATA_Manage}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Board;