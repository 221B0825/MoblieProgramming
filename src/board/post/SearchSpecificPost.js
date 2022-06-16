//basic
import React, { useState, useEffect, useCallback } from 'react';
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

const SearchSpecificPost = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const [categoryValue, setCategoryValue] = useState('free');
  const [categoryItems, setCategoryItems] = useState([
    { label: '자유게시판', value: 'free' },
    { label: '정보게시판', value: 'info' },
    { label: '구인공고게시판', value: 'job' },
    { label: '정부기관공지게시판', value: 'notice' },
    { label: 'Q&A게시판', value: 'QA' },
  ]);

  const [typeValue, setTypeValue] = useState('title');
  const [typeItems, setTypeItems] = useState([
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
    { label: '작성자', value: 'writer' },
  ]);

  const onCategoryOpen = useCallback(() => {
    setTypeOpen(false);
  }, []);

  const onTypeOpen = useCallback(() => {
    setCategoryOpen(false);
  }, []);

  return (
    <SafeAreaView style={postStyle.container}>
      <SafeAreaView
        style={[
          basicStyle.row,
          {
            justifyContent: 'center',
          },
        ]}
      >
        <TextInput
          style={[
            postStyle.textInput,
            {
              margin: 10,
              padding: 10,
            },
          ]}
          placeholder="검색어 입력..."
        ></TextInput>
        <TouchableOpacity style={postStyle.smallButton}>
          <Text>검색</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView
        style={[
          basicStyle.row,
          {
            justifyContent: 'center',
          },
        ]}
      >
        <DropDownPicker
          containerStyle={{
            width: 150,
            margin: 5,
          }}
          open={categoryOpen}
          onOpen={onCategoryOpen}
          value={categoryValue}
          items={categoryItems}
          setOpen={setCategoryOpen}
          setValue={setCategoryValue}
          setItems={setCategoryItems}
        />

        <DropDownPicker
          containerStyle={{
            width: 100,
            margin: 5,
          }}
          open={typeOpen}
          onOpen={onTypeOpen}
          value={typeValue}
          items={typeItems}
          setOpen={setTypeOpen}
          setValue={setTypeValue}
          setItems={setTypeItems}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default SearchSpecificPost;
