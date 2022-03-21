import React, {useState}  from 'react';
import { SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import ValidateFooter from '../../components/Create/components/ValidateFooter';
import {
  Container,  
  Img,
  HeaderContainer,
  Left,
  Right,
  Name,
  BottomContainer,
  IconsContainer,
  Ellement,
  Profile,
  TextInputContainer,
  TextInput,
  OptionsContainer,
  Option,
  Text
} from './styles';
import profile from '../../assets/images/icons/profile.jpeg';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const ValidateStoryScreen = ({route}) => {

  const  { params : {path} } = route;

  const navigation = useNavigation();

  return(
    <SafeAreaView>
        <Container>

          <HeaderContainer>
            <Left>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create")}>
                <AntDesign name="arrowleft" size={25} style={{color: "black"}} />
              </TouchableWithoutFeedback>
              <Name>New Post</Name>
            </Left>

            <Right>
              <AntDesign name='check' size={30} style={{color:'#0095f6'}} />
            </Right>
          </HeaderContainer>

          <Img 
              source={{uri : `${Platform.OS === "android" ? 'file://' : ''}${path}`}}
              resizeMode='cover'
          />

          <BottomContainer>
            <IconsContainer>
              <Ellement>
                <Profile source={profile} />
              </Ellement>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Write a caption..."
                  placeholderTextColor={"lightgray"}
                />
              </TextInputContainer>
          
            </IconsContainer>
          </BottomContainer>
          <OptionsContainer>
            <Option>
              <Text>Tag people</Text>
            </Option>
            <Option>
              <Text>Add location</Text>
            </Option>
            <Option>
              <Text>Add fundraiser</Text>
            </Option>
          </OptionsContainer>

          <ValidateFooter />

      </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
