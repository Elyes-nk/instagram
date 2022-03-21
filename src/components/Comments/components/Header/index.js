import React from 'react';
import {TouchableWithoutFeedback} from 'react-native'
import {Container,Send, Left, Right, Name} from './styles';
import send from '../../../../assets/images/icons/send.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = () =>{ 
  const navigation = useNavigation()
  return(
    <Container>
      <Left>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={25} style={{color: "black"}} />
        </TouchableWithoutFeedback>
        <Name>Comments</Name>
      </Left>

      <Right>
        <Send source={send} />
      </Right>
    </Container>
  )
}

export default Header;
