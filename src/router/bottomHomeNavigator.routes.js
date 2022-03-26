import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackScreen from './home.routes';
import DiscoveryScreen from "../screens/DiscoveryScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ShopScreen from "../screens/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen";
import reels from '../assets/images/icons/reels.png'
import home from '../assets/images/icons/home.png'
import search from '../assets/images/icons/search.png'
import bag from '../assets/images/icons/bag.png'
import profile from '../assets/images/icons/profile.jpeg'


const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'HomeTab') {
          return  <Image style={{width:30, height:30}} source={home} />
        }
        if (route.name === 'Discovery') {
          return  <Image style={{width:26, height:26}} source={search} />
        }
        if (route.name === 'Reels') {
          return  <Image style={{width:30, height:30}} source={reels} />
        }
        if (route.name === 'Shop') {
          return <Image style={{width:26, height:26, resizeMode:'contain'}} source={bag} />
        }
        if (route.name === 'Profile') {
          return <Image style={{width:26, height:26, borderRadius:999, resizeMode:'contain'}} source={profile} />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      showLabel: false,
    }}
  >
    <Tab.Screen 
      name="HomeTab" 
      component={HomeStackScreen}
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen 
      name="Discovery" 
      component={DiscoveryScreen} 
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Reels" 
      component={ReelsScreen} 
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen 
      name="Shop" 
      component={ShopScreen} 
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        headerShown: false
      }}
    />
  </Tab.Navigator>
)

export default BottomHomeNavigator;
