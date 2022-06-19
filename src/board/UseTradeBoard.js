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
    title: '자취방 양도(풀옵션, 보증금 있음)',
  },
  {
    id: '2',
    title: '직접 재배한 깻잎 판매합니다!',
  },
  {
    id: '3',
    title: '휴대폰 아무거나 삽니다(급함)',
  },
];

const Item = ({ title }) => (
  <TouchableOpacity style={boardStyle.boardItem}>
    <Text style={boardStyle.font}>{title}</Text>
  </TouchableOpacity>
);

const UseTradeBoard = ({ navigation }) => {
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

export default UseTradeBoard;
