import React from 'react';
import styled from 'styled-components';

const ProfilePicture = ({ uri, size = 63 }) => {
  
  const Container = styled.View`
    margin: 7px;
    border-radius: 40px;
    border-width: 2px;
    border-color: #e8482c;
    width: ${size + 4}px;
    height: ${size + 4}px;
  `
  const Img = styled.Image`
    border-radius: 40px;
    border-width: 2px;
    border-color: #ffffff;
    width: ${size}px;
    height: ${size}px;
  `
  return (
    <Container>
      <Img
        source={uri}
      />
    </Container>
  )
}
export default ProfilePicture;
