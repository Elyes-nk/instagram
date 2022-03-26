import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
import {Container, Left, Right, Name} from './styles';

const Header = ({imageUri, name}) => (
  <Container>
    <Left>
      <ProfilePicture uri={imageUri} size={32} />
      <Name>{name}</Name>
    </Left>
    <Right>
      <Icon name="dots-three-vertical" size={16} />
    </Right>
  </Container>
)

export default Header;
