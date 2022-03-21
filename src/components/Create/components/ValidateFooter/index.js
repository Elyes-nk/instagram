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

function ValidateFooter() {
  return (
    <BottomContainer>
        <IconsContainer>                  
            <TextContainer>    
                <Profile source={profile}/>
                <TextMessage>Your stories</TextMessage>                              
            </TextContainer>                      
            <TextContainer> 
                <Star>
                    <Entypo name="star" size={15} color={"white"}/>
                </Star>
                <TextMessage>Close freinds</TextMessage>                          
            </TextContainer>
        
            <Icon>
                <AntDesign name="right" size={20} color={"black"}/>
            </Icon>
            
        </IconsContainer>
    </BottomContainer>
  )
}

export default ValidateFooter