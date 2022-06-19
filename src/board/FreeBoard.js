//basic
import React from 'react';
import {
  Image,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

//navigation
import 'react-native-gesture-handler';

//style
import { boardStyle } from '../styles';

const DATA = [
  {
    id: '1',
    title: '독일 식당에 관해서 소소한 의견',
  },
  {
    id: '2',
    title: '오랜만에 시내투어',
  },
  {
    id: '3',
    title: '유학을 앞두고 있습니다...',
  },
];

const FreeBoard = ({ navigation }) => {
  const Item = ({ title }) => (
    <TouchableOpacity
      style={boardStyle.boardItem}
      onPress={() => {
        navigation.navigate('ShowPost');
      }}
    >
      <Text style={boardStyle.font}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={boardStyle.boardContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={boardStyle.WriteItem}
        onPress={() => {
          navigation.navigate('Write');
        }}
      >
        <Text style={boardStyle.fontWrite}>글쓰기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FreeBoard;
