import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";
import {Container, TextName} from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Story = (props) => {
  const {
    story: {
      user: {
        id,
        image,
        name
      }
    }
  } = props;
  
  var username = name
  const editUsername = () => {
    if(username.length>9){
      username = username.substring(0,8)+"..."
    }
  }
  editUsername()
  

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userId: id });
  }

  return (
    <Container >
      <TouchableWithoutFeedback onPress={onPress}> 
        <ProfilePicture uri={image}/>
      </TouchableWithoutFeedback>
      <TextName>{username}</TextName>
    </Container>
  )
}

export default Story;
