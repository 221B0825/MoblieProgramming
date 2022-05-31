import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect} from 'react';
import {theme} from '../theme';
import 'react-native-gesture-handler';

const Main = () => {


    return (
        <SafeAreaView>
            <Text>Main</Text>
        </SafeAreaView>
    )
}

export default Main;