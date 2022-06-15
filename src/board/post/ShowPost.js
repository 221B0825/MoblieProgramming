//basic
import React from 'react';
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
import { basicStyle, postStyle } from '../../styles';

//navigation
import 'react-native-gesture-handler';

const ShowPost = ({ navigation }) => {
  return (
    <SafeAreaView style={postStyle.container}>
      <Text style={postStyle.name}>작성자: 홍길동</Text>
      <Text multiline numberOfLines={10} style={postStyle.body}>
        독일 어딘가에 거주하고 있는 학생입니다! 앞으로 잘 부탁드립니다!
      </Text>

      <SafeAreaView style={postStyle.rightRow}>
        <TouchableOpacity style={postStyle.smallButton}>
          <Text style={basicStyle.buttonText}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postStyle.smallButton}>
          <Text style={basicStyle.buttonText}>삭제</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={postStyle.line}></View>

      <ScrollView>
        <Text style={postStyle.text}>ID: 가나다라</Text>
        <Text style={postStyle.text}>
          댓글 내용: 반갑습니다. 저도 잘 부탁드립니다!
        </Text>

        <SafeAreaView style={postStyle.rightRow}>
          <TouchableOpacity style={postStyle.smallButton}>
            <Text style={basicStyle.buttonText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity style={postStyle.smallButton}>
            <Text style={basicStyle.buttonText}>삭제</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={postStyle.line}></View>
      </ScrollView>
      <SafeAreaView style={basicStyle.row}>
        <TextInput style={basicStyle.textInput}>댓글을 입력하세요</TextInput>
        <TouchableOpacity style={postStyle.smallButton}>
          <Text style={basicStyle.buttonText}>입력</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ShowPost;
