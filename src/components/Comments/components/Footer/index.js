import React, {useState} from 'react';
import {Keyboard} from 'react-native'
import {
    BottomContainer, 
    Ellement, 
    TextInput, 
    TextInputContainer,
    IconsContainer,
    Send,
    Profile
  } from './styles';

import profile from '../../../../assets/images/icons/profile.jpeg'

const Footer = ({setComments, comments}) => {

  const [comment, setComment] = useState(null);

  const handleSubmit = () => {
   if (comment) {
      let newArray = comments;
      newArray.push(
        {
          content:comment, 
          likes: 0,
          createdAt: "2 s",
          user: { 
            id:10, 
            name:"elyes-nk", 
            image:require('../../../../assets/images/icons/profile.jpeg'),
          }
        }
      );
      setComments(newArray);
      setComment(null);
      Keyboard.dismiss();
   }
  }
  return (
          <BottomContainer>
            <IconsContainer>
              <Ellement>
                <Profile source={profile} />
              </Ellement>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Add a comment..."
                  placeholderTextColor={"lightgray"}
                  onChangeText={txt => setComment(txt)}
                  value={comment}
                />
              </TextInputContainer>
          
              <Ellement>
                <Send 
                  onPress={() => handleSubmit()}
                >Post</Send>
              </Ellement>
            </IconsContainer>
          </BottomContainer>
  )
}

export default Footer;
