/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import ProfileScreen from "../screens/profile/profileScreen";
import NotificationScreen from "../screens/notification/notificationScreen";
import SettingScreen from "../screens/setting/settingScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import CustomTabBarButton from "../components/customTabBarButton";
import CustomTabBar from "../components/customTabBar";
import { useNavigation } from "@react-navigation/native";
Icon.loadFont();

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  const navigation = useNavigation();
  console.log("navigation", props)
  return (
    <Tab.Navigator
      initialRouteName={props.route && props.route.params && props.route.params.params?props.route.params.params:'feed'}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={(route)=>({
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:styles.tabBarStyle,
      tabBarActiveTintColor:"#B666D2", 
      tabBarInactiveTintColor:"#c1c1c1", 
      tabBarIcon:({color, size, focused}:any)=>{
        let iconName;
        if(route.route.name === "feed"){
          iconName = focused ? "ios-home-sharp" : "ios-home-outline";
        }else if(route.route.name === "Profile"){
          iconName = focused ? "ios-person-circle-sharp" : "ios-person-circle-outline";
        }else if(route.route.name === "Notification"){
          iconName = focused ? "ios-notifications-circle" : "ios-notifications-circle-outline";
        }else if(route.route.name === "Settings"){
          iconName = focused ? "settings-sharp" : "ios-settings-outline";
        }
        return <Icon name={iconName} size={22} color={color} />
      // eslint-disable-next-line comma-dangle
      }
      })}>
      <Tab.Screen name="feed" component={HomeScreen} options={{
        tabBarLabel:"Feeds",
        title:"Feed",
        headerShown:true,
        tabBarButton: props => (<CustomTabBarButton route="feed" {...props} />),
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <Icon name={Platform.OS === 'ios' ? 'ios-menu': 'md-menu'} size={30} color={'#222'} style={{marginRight:10}} />
            </TouchableOpacity>
          )
        }
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel:"Profile",
        title:"Profile",
        headerShown:true,
        tabBarButton: props => <CustomTabBarButton {...props} />,
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <Icon name={Platform.OS === 'ios' ? 'ios-menu': 'md-menu'} size={30} color={'#222'} style={{marginRight:10}} />
            </TouchableOpacity>
          )
        }
      }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
         tabBarLabel:"Notification",
         title:"Notification",
         headerShown:true,
        tabBarButton: props => <CustomTabBarButton {...props} />,
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <Icon name={Platform.OS === 'ios' ? 'ios-menu': 'md-menu'} size={30} color={'#222'} style={{marginRight:10}} />
            </TouchableOpacity>
          )
        }
      }} />
      <Tab.Screen name="Settings" component={SettingScreen}  options={{
        tabBarLabel: "Settings",
        title:"Settings",
        headerShown:true,
        tabBarButton: props => <CustomTabBarButton {...props} />,
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <Icon name={Platform.OS === 'ios' ? 'ios-menu': 'md-menu'} size={30} color={'#222'} style={{marginRight:10}} />
            </TouchableOpacity>
          )
        }
      }} />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;

const styles = StyleSheet.create({

  tabBarStyle:{
    backgroundColor:'transparent',
    position:'absolute',
    borderTopWidth:0,
    bottom:15,
    right:0,
    left:0,
    height:55,
  }

});