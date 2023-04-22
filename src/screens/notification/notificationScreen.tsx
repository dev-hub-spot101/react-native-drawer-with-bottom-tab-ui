/* eslint-disable prettier/prettier */

import { SafeAreaView, Text, View } from "react-native";
import React from 'react';


function NotificationScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#B666D2' }}>
                <Text>Ntification Screen</Text>
            </View>
        </SafeAreaView>
    );
  }

export default NotificationScreen;