import React, { useState, useEffect }from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import bottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from "../screens/StoryScreen";
import CommentsScreen from "../screens/CommentsScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateScreen from "../screens/CreateScreen";
import ValidateStoryScreen from '../screens/ValidateStoryScreen'
import ValidatePostScreen from '../screens/ValidatePostScreen'

import AsyncStorage from '@react-native-async-storage/async-storage';


const RootStack = createStackNavigator();

const Router = () => { 
  const [isConnected, setIsConnected] = useState(true);

  const handleCheckToken = async() => {
    try{
        let Token = await AsyncStorage.getItem('token')
        if (Token !== null) {
          setIsConnected(true)
        }
      }catch(err){
        console.log(err);
      }
    }

  useEffect(() => {
    handleCheckToken()
  }, []);


  return(
  <RootStack.Navigator>
     {/* <RootStack.Screen
      name={"Login"}
      component={LoginScreen}
      options={{
        headerShown: false
      }}
    /> */}
    {isConnected && 
    <>
      <RootStack.Screen
        name={"Home"}
        component={bottomHomeNavigator}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: false,
        }}
      />
       <RootStack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: false,
        }}
      />
       <RootStack.Screen
        name="ValidateStory"
        component={ValidateStoryScreen}
        options={{
          headerShown: false,
        }}
      />
       <RootStack.Screen
        name="ValidatePost"
        component={ValidatePostScreen}
        options={{
          headerShown: false,
        }}
      />
    </>
    }
  </RootStack.Navigator>
);
}

export default Router;
