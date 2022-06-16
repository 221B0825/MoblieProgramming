//basic
import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

//navigation
import 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

//style
import { boardStyle } from '../../styles';

const Write = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const InputTitle = (e) => {
    setTitle(e);
  };

  const InputContent = (e) => {
    setContent(e);
  };

  return (
    <SafeAreaView style={boardStyle.boardContainer}>
      <View>
        <TextInput
          style={boardStyle.textInputTitle}
          placeholder="제목"
          placeholderTextColor="black"
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
          placeholderTextColor="black"
          numberOfLines={30}
        />
      </View>

      <TouchableOpacity
        style={boardStyle.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={boardStyle.fontWrite}>완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Write;
