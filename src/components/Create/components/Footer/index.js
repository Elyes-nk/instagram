import React, {useState} from 'react'
import { RNCamera } from 'react-native-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TextContainer, 
  TextMessage, 
  Icon, 
  BottomContainer, 
  IconsContainer,
  TextMessageSelected
} from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Footer({captureHandle, cameraFlip, setCameraFlip, isPostSelected, setIsPostSelected}) {

    //CUSTOM FUNCTION TO SWITCH CAMERA
    const handleCameraFlip = () => {
        if(cameraFlip === RNCamera.Constants.Type.back){
            setCameraFlip(RNCamera.Constants.Type.front)
        }else{
            setCameraFlip(RNCamera.Constants.Type.back)
        }
    }

  return (
    <BottomContainer>
      <IconsContainer>
        {!isPostSelected ?
            <TouchableWithoutFeedback onPress={() => captureHandle()}>
                <Icon>
                    <MaterialCommunityIcons name="camera-iris" size={40} color={"white"} />
                </Icon>
            </TouchableWithoutFeedback>
            :
            <Icon onPress={() => captureHandle()}>
                <MaterialCommunityIcons name="camera-iris" size={40} color={"black"} />
            </Icon>
        }
        <TextContainer>
        {isPostSelected? 
            <TouchableWithoutFeedback onPress={() => setIsPostSelected(!isPostSelected)}>
            <TextMessageSelected>Post</TextMessageSelected>
            </TouchableWithoutFeedback>
            :
            <TouchableWithoutFeedback onPress={() => setIsPostSelected(!isPostSelected)}>
            <TextMessage>Post</TextMessage>
            </TouchableWithoutFeedback>
        } 
        {isPostSelected? 
            <TouchableWithoutFeedback onPress={() => setIsPostSelected(!isPostSelected)}>
            <TextMessage>Story</TextMessage>
            </TouchableWithoutFeedback>
            :
            <TouchableWithoutFeedback onPress={() => setIsPostSelected(!isPostSelected)}>
            <TextMessageSelected>Story</TextMessageSelected>
            </TouchableWithoutFeedback>
        } 
        
        </TextContainer>
        {!isPostSelected ?
            <TouchableWithoutFeedback onPress={() => handleCameraFlip()}>
                <Icon>
                    <MaterialCommunityIcons name="camera-flip-outline" size={40} color={"white"}/>
                </Icon>
            </TouchableWithoutFeedback>
            :
            <Icon>
                <MaterialCommunityIcons name="camera-flip-outline" size={40} color={"black"}/>
            </Icon>
        }
      </IconsContainer>
    </BottomContainer>
  )
}

export default Footer