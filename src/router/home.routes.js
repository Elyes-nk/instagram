import React from 'react';
import {Image, View ,Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

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
          <Image source={logo} resizeMode="contain" style={{width: 123, height: 45}}/>
        ),
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Create")}>
              <Image style={{width:24, marginTop:10, marginRight:20, height:24}} source={plus} />
            </TouchableWithoutFeedback>
            <Image style={{width:24, marginTop:10,marginRight:20, height:24}} source={heart} />
            <Image style={{width:24, marginTop:10, height:24}} source={messenger} />
          </View>
        )
      }}
    />
  </HomeStack.Navigator>
)
}
export default HomeRoutes;
