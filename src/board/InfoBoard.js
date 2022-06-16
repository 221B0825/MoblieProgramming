//basic
import React from 'react';
import {
  Image,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ViewBase,
} from 'react-native';

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



const InfoBoard = ({ navigation }) => {
  const Item = ({ title }) => (
    <TouchableOpacity style={boardStyle.boardItem} onPress={() => {
      navigation.navigate('ShowPost');
    }}>
      <Text style={boardStyle.font}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={boardStyle.boardContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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

export default InfoBoard;
