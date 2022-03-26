import React from 'react';
import {Image, View ,Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import styled from 'styled-components'
import HomeScreen from "../screens/HomeScreen";
import logo from "../assets/images/logo.png";
import messenger from "../assets/images/icons/messenger.png"
import heart from "../assets/images/icons/heart.png"
import plus from "../assets/images/icons/plus.png"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {

  const navigation = useNavigation()

  return(
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitle: () => (<Text></Text>),
          headerLeft: () => (
            <Logo source={logo} resizeMode="contain" />
          ),
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create")}>
                <Plus source={plus} />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Notifications")}>
                <Heart source={heart} />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Messenger")}>
                <Messenger source={messenger} />
              </TouchableWithoutFeedback>
            </View>
          )
        }}
      />
    </HomeStack.Navigator>
  )
}

const Logo = styled.Image`
  width: 123px;
  height: 45px;
`

const Plus = styled.Image`
  width:24px;
  margin-top:10px;
  margin-right:20px;
  height:24px;
`
const Heart = styled.Image`
  width:24px;
  margin-top:10px;
  margin-right:20px;
  height:24px;
`

const Messenger = styled.Image`
width:24px;
margin-top:10px;
height:24px;
`

export default HomeRoutes;
