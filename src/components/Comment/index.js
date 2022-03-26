import React, {useState, useEffect} from 'react';
import {
  Container,
  CommentContainer,
  ReactionContainer,
  Caption, 
  Small,
  Heart,
  CommentTop,
  ContainerTwo,
} from "./styles";

import ProfilePicture from '../ProfilePicture'
import heart from '../../assets/images/icons/heart.png'
import hearto from '../../assets/images/icons/hearto.png'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Comment = ({comment}) => {

  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  }

  useEffect(() =>{
    setLikesCount(comment?.likes)
  }, [])
  
  return (
    <Container>
      <ContainerTwo>
        <ProfilePicture uri={comment?.user?.image} size={34} />
        <CommentContainer>
            <CommentTop>
                <Caption>{comment?.user?.name}</Caption>
                <Caption>{comment?.content}</Caption>
            </CommentTop>
            <ReactionContainer>
                <Small> {comment?.createdAt}</Small>
                <Small> {likesCount} likes</Small>
                <Small> Reply </Small>
            </ReactionContainer>
        </CommentContainer>
      </ContainerTwo>
      <TouchableWithoutFeedback onPress={onLikePressed}>
          {isLiked ?
              <Heart source={hearto} />
              :
              <Heart source={heart} />
            }
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default Comment;
