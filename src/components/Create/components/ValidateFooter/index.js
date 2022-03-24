import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import {
    BottomContainer,  
    IconsContainer,
    TextContainer,
    TextMessage,
    Icon,
    Star,
    Profile
} from './styles';
import profile from '../../../../assets/images/icons/profile.jpeg'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ValidateFooter({handleCreateStory}) {
  return (
    <BottomContainer>
        <IconsContainer>  
            <TextContainer>    
                <Profile source={profile}/>
                <TouchableWithoutFeedback onPress={handleCreateStory}>
                    <TextMessage>Your stories</TextMessage>     
                </TouchableWithoutFeedback>
            </TextContainer>
            <TextContainer> 
                <Star>
                    <Entypo name="star" size={15} color={"white"}/>
                </Star>
                <TextMessage>Close freinds</TextMessage>                          
            </TextContainer>
            <Icon>
                <TouchableWithoutFeedback onPress={handleCreateStory}>
                    <AntDesign name="right" size={20} color={"black"}/>
                </TouchableWithoutFeedback>
            </Icon>
        </IconsContainer>
    </BottomContainer>
  )
}

export default ValidateFooter