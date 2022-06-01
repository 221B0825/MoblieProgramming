//basic
import React from 'react';
import {View, FlatList, Text, SafeAreaView, StatusBar } from 'react-native';

//navigation
import 'react-native-gesture-handler';

//style
import { theme, boardStyle } from '../styles';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '게시물 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '게시물 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '게시물 3',
    },
  ];

  const Item = ({ title }) => (
    <View style={boardStyle.item}>
      <Text style={boardStyle.title}>{title}</Text>
    </View>
  );

const InfoBoard = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )
    
  return (
    <SafeAreaView style={boardStyle.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
    </SafeAreaView>
  );
}

export default InfoBoard;