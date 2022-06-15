//basic
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

//style
import { colors, basicStyle, postStyle } from '../../styles';

//navigation
import 'react-native-gesture-handler';

//dropDown
import DropDownPicker from 'react-native-dropdown-picker';

const SearchPost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('title');
  const [items, setItems] = useState([
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
    { label: '작성자', value: 'writer' },
  ]);

  return (
    <SafeAreaView style={postStyle.container}>
      <SafeAreaView
        style={[
          basicStyle.row,
          {
            margin: 10,
          },
        ]}
      >
        <DropDownPicker
          containerStyle={{
            width: 100,
          }}
          style={{
            backgroundColor: colors.dropDown,
            width: 100,
          }}
          dropDownContainerStyle={{
            backgroundColor: colors.dropDown,
            width: 100,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          style={postStyle.textInput}
          placeholder="검색어 입력..."
        ></TextInput>
        <TouchableOpacity style={postStyle.smallButton}>
          <Text>검색</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default SearchPost;
