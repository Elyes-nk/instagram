import React, { useState, useContext, useEffect } from 'react';
import { 
        Text, 
        Alert,
        TouchableWithoutFeedback,
        ActivityIndicator
     } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Logo,
    Container,
    TextInput,
    Btn,
    OrContainer,
    Or,
    ForgotenContainer
    } from './styles'
import { Context } from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../assets/images/logo.png'

const LoginScreen = () =>{

    const { setIsConnected } = useContext(Context);
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if(user?.name?.length > 3 && user?.password?.length > 3){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }, [user]);
   
    const handleSubmit = () =>{
        setIsFetching(true)
        if(isValid){
            if(user?.name.toLowerCase() === "elyes" && user?.password.toLowerCase() === "elyes"){
                handleConnexion()
            }else{
                setIsFetching(false)
                Alert.alert("Incorrect username or password",
                "The credentials that you've entered doesn't appear to belong to an account. Please check your credentials and try again.",
                [
                  {
                    text: "Try again",
                  },
                ],)
            }
        }
    }

    const handleConnexion = async() => {
        try{
            let token = "azeazea"
            setIsConnected(true)
            await AsyncStorage.setItem('token', token)
            navigation.navigate("Home")
          }catch(err){
            setIsFetching(false)
            console.log("token not working");
            console.log(err);
            Alert.alert("Incorrect username or password",
            "The credentials that you've entered doesn't appear to belong to an account. Please check your credentials and try again.",
            [
                {
                text: "Try again",
                },
            ],)
          }
    }

    return(
    <Container>
        <Logo source={logo} />
        <TextInput
            editable
            placeholder="Phone number, email adress or username"
            placeholderTextColor={"#8e8e8e"}
            onChangeText={txt => setUser({...user, name:txt})}
        />
        <TextInput
            editable
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={"#8e8e8e"}
            onChangeText={txt => setUser({...user, password:txt})}
        />
        <TouchableWithoutFeedback onPress={handleSubmit}>
            <Btn 
                style={isValid ? { backgroundColor: '#0095f6'} :{ backgroundColor: '#b2dffc'}}
            >
                {
                    isFetching ? 
                    <ActivityIndicator/>
                    :
                    <Text style={{color: 'white'}}> Log in</Text>
                }
            </Btn>
        </TouchableWithoutFeedback>
      
        <ForgotenContainer>
            <Text> Forgoten your login details? </Text>
            <Text style={{color: '#00376b'}}>Get help with logging in.</Text>
        </ForgotenContainer>
        <OrContainer>
            <Or/>
            <Text> OR </Text>
            <Or/>
        </OrContainer>
        <Btn style={{ backgroundColor: '#0095f6'}}>
            <MaterialCommunityIcons name="facebook" style={{color: 'white', fontSize:30}} />
            <Text style={{color: 'white'}}> Connect with Facebook</Text>
        </Btn>

    </Container>
)}


export default LoginScreen;
