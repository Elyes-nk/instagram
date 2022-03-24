import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/Context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';

const ProfileScreen = () =>{
    const navigation = useNavigation();
    const { setIsConnected } = useContext(Context);

    const handleLogout = async() => {
        try{
            await AsyncStorage.removeItem("token")
            setIsConnected(false)
            navigation.navigate("Login")
        }catch(err){console.log(err);}
    }

 return(
    <Container>
        <Title>Profile</Title>
        <TouchableWithoutFeedback onPress={handleLogout}>
            <AntDesign name="logout" size={35} color={"#ffffff"}/>
        </TouchableWithoutFeedback>
    </Container>
)}

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
    background-color: black;
`

const Title = styled.Text`
    font-size: 30px;
    color: white;
    margin: 20px;
`
export default ProfileScreen;
