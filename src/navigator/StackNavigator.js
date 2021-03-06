//basic
import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';
import { MainDrawerNavigator } from './DrawNavigator';

//screens
import LoginScreen from '../screen/Login';
import SignupScreen from '../screen/SignUp';
import ProfileScreen from '../screen/Profile';
import ValidUserScreen from '../screen/ValidUser';
import WithdrawalScreen from '../screen/Withdrawal';
import EditProfileScreen from '../screen/EditProfile';
import NoticeBoard from '../board/NoticeBoard';
import InfoBoard from '../board/InfoBoard';
import QABoard from '../board/QABoard';
import FreeBoard from '../board/FreeBoard';
import UseTradeBoard from '../board/UseTradeBoard';
import JobPostingBoard from '../board/JobPostingBoard';
import Write from '../board/write/Write';
import Board from '../board/Board';
import JobPostingWrite from '../board/write/JobPostingWrite';

import ShowPost from '../board/post/ShowPost';
import SearchPost from '../board/post/SearchPost';
import SearchSpecificPost from '../board/post/SearchSpecificPost';

const Stack = createStackNavigator();

const FirstStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'SignUp',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainDrawerNavigator}
        options={{
          title: 'Main',
        }}
      />
    </Stack.Navigator>
  );
};

const BoardStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Board">
      <Stack.Screen
        name="Board"
        component={Board}
        options={{
          title: '',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NoticeBoard"
        component={NoticeBoard}
        options={{
          title: '???????????? ?????? ?????????',
        }}
      />
      <Stack.Screen
        name="InfoBoard"
        component={InfoBoard}
        options={{
          title: '?????? ?????? ?????????',
        }}
      />
      <Stack.Screen
        name="QABoard"
        component={QABoard}
        options={{
          title: 'Q&A ?????????',
        }}
      />
      <Stack.Screen
        name="FreeBoard"
        component={FreeBoard}
        options={{
          title: '???????????????',
        }}
      />
      <Stack.Screen
        name="UseTradeBoard"
        component={UseTradeBoard}
        options={{
          title: '?????? ?????? ?????????',
        }}
      />
      <Stack.Screen
        name="JobPostingBoard"
        component={JobPostingBoard}
        options={{
          title: '?????? ?????? ?????????',
        }}
      />
      <Stack.Screen
        name="Write"
        component={Write}
        options={{
          title: 'Write',
        }}
      />
      <Stack.Screen
        name="JobPostingWrite"
        component={JobPostingWrite}
        options={{
          title: 'JobPostingWrite',
        }}
      />
      <Stack.Screen
        name="ShowPost"
        component={ShowPost}
        options={{
          title: '????????? ??????',
        }}
      />
      <Stack.Screen
        name="SearchPost"
        component={SearchPost}
        options={{
          title: '?????? ????????? ??????',
        }}
      />
      <Stack.Screen
        name="SearchSpecificPost"
        component={SearchSpecificPost}
        options={{
          title: '?????? ????????? ??????',
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />

      <Stack.Screen
        name="ValidUser"
        component={ValidUserScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="Withdrawal"
        component={WithdrawalScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { FirstStackNavigator, ProfileStackNavigator, BoardStackNavigator };
