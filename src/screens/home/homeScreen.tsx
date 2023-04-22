/* eslint-disable prettier/prettier */

import { SafeAreaView, Text, View } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#3BB9FF' }}>
                <Text>Home Screen</Text>
                <Icon name={'ios-home'} size={22} color={'#000'} />
            </View>
        </SafeAreaView>
    );
  }

export default HomeScreen;