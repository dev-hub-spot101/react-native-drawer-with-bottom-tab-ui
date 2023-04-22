/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from "./bottomTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/customDrawer";
import ProfileScreen from "../screens/profile/profileScreen";
import NotificationScreen from "../screens/notification/notificationScreen";
import SettingScreen from "../screens/setting/settingScreen";
// Icon.loadFont();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#B666D2",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
            marginLeft: -20,
        },
        }}>

        <Drawer.Screen name={"Home Drawer"} initialParams={{ params: 'feed' }} component={BottomTabNavigator} options={{ 
            title:"Feed",
            drawerIcon : ({focused, color, size}) =>(
                <Icon name="home-sharp" size={18} color={color} />
            )
        }} />

        <Drawer.Screen name={"Profile"}  initialParams={{ params: 'Profile' }} component={BottomTabNavigator} options={{
            title:"Profile", 
            drawerIcon : ({focused, color, size}) =>(
                <Icon name="ios-person-circle-sharp" size={18} color={color} />
            )
        }} />

        <Drawer.Screen name={"Notification"} initialParams={{ params: 'Notification' }} component={BottomTabNavigator} options={{
            title:"Notification", 
            drawerIcon : ({focused, color, size}) =>(
                <Icon name="ios-notifications-circle" size={18} color={color} />
            )
        }} />

        <Drawer.Screen name={"Settings"} initialParams={{ params: 'Settings' }} component={BottomTabNavigator} options={{
            title:"Settings", 
            drawerIcon : ({focused, color, size}) =>(
                <Icon name="settings-sharp" size={18} color={color} />
            )
        }} />
        
    </Drawer.Navigator>
    )
}

export default DrawerNavigator;