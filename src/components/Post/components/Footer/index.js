import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

    
    import {
      Container,
      LeftIcons, 
      IconsContainerImg, 
      Likes, 
      Caption, 
      PostedAt,
      Comments,
      Heart,
      Save,
      Chat
    } from "./styles";

  import heart from '../../../../assets/images/icons/heart.png'
  import hearto from '../../../../assets/images/icons/hearto.png'
  import chat from '../../../../assets/images/icons/chat.png'
  import send from '../../../../assets/images/icons/send.png'
  import save from '../../../../assets/images/icons/save.png'





const Footer = ({likesCount, id, caption, postedAt, isLiked, comments, onLikePressed}) => {

  const navigation = useNavigation();

  let num = likesCount.toString()
  let likes = "";
  if(num.length > 3){
      let count = 0;
      for(let i = num.length; i >= 0, i--;){
          if(count < 3){
              likes = num[i] + likes
              count++;
          }else{
              likes = num[i] + ',' + likes;
              count = 1;
          }
      }
  }else{
    likes = num;
  }

  return (
    <Container>

      <IconsContainerImg>
        <LeftIcons>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ?
              <Heart source={hearto} />
              :
              <Heart source={heart} />
            }
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Comments", {postId: id})}>
              <Chat source={chat} />
          </TouchableWithoutFeedback>
          <Save source={send} />
        </LeftIcons>
        <Save source={save} />
      </IconsContainerImg>

      <Likes>{likes} Likes</Likes>
      <Caption>{caption}</Caption>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Comments", {postId: id})}>
        <Comments>View all {comments?.length} comments</Comments>
      </TouchableWithoutFeedback>
      <PostedAt>{postedAt}</PostedAt>
    </Container>
  )
}

export default Footer;
