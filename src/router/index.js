import React, { useContext, useState, useEffect }from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import bottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from "../screens/StoryScreen";
import CommentsScreen from "../screens/CommentsScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateScreen from "../screens/CreateScreen";
import ValidateStoryScreen from '../screens/ValidateStoryScreen'
import ValidatePostScreen from '../screens/ValidatePostScreen'
import { Context } from "../context/Context";
import styled from 'styled-components'
import MessengerScreen from '../screens/MessengerScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ShareScreen from '../screens/ShareScreen';

const Router = () => { 
  const { isConnected } = useContext(Context);
  const RootStack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
   setTimeout(()=> {
    setisLoading(false)
   }, 1000)
  }, []);

  if(isLoading){
    return(
      <Container>
        <MainLogo
          source={require('../assets/images/mainlogo.png')}
        />
      </Container>
    )
  }

  return(
  <RootStack.Navigator>
     
    {isConnected ? 
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
      <RootStack.Screen
        name="Messenger"
        component={MessengerScreen}
        options={{
          headerShown: false,
        }}
      />
       <RootStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Share"
        component={ShareScreen}
        options={{
          headerShown: false,
        }}
      />
    </>
    :
    <RootStack.Screen
      name={"Login"}
      component={LoginScreen}
      options={{
        headerShown: false
      }}
    />
    }
  </RootStack.Navigator>
);
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `
const MainLogo = styled.Image`
    height: 70px;
    width: 70px;
`

export default Router;
