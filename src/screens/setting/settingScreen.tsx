/* eslint-disable prettier/prettier */

import { SafeAreaView, Text, View } from "react-native";
import React from 'react';


function SettingScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#387C44' }}>
                <Text>Setting Screen</Text>
            </View>
        </SafeAreaView>
    );
  }

export default SettingScreen;