/* eslint-disable prettier/prettier */

import { SafeAreaView, Text, View } from "react-native";
import React from 'react';


function ProfileScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#007C80' }}>
                <Text>Profile Screen</Text>
               
            </View>
        </SafeAreaView>
    );
  }

export default ProfileScreen;