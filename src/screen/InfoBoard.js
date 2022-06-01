//basic
import React from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

//navigation
import 'react-native-gesture-handler';

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
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const InfoBoard = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )
    
  return (
    <SafeAreaView style={styles.container}>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#ffffff',
    },

    // scrollView: {
    //     backgroundColor: 'pink',
    //     marginHorizontal: 20,
    // },

    item: {
      backgroundColor: '#F0EDEB',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default InfoBoard;