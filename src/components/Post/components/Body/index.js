import React from 'react';
import {TouchableWithoutFeedback} from 'react-native'
import {Img} from './styles';

const Body = ({ imageUri, onLikePressed }) => (
  <TouchableWithoutFeedback onPress={onLikePressed}>
    <Img source={imageUri} />
  </TouchableWithoutFeedback>
)

export default Body;
