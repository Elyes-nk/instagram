import React from 'react';
import styled from 'styled-components';

const ShopScreen = () => (
  <Container>
    <Title>Shop</Title>
  </Container>
)

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
    background-color: black;
`
const Title = styled.Text`
    font-size: 30px;
    color: white;
    margin: 20px;
`

export default ShopScreen;
