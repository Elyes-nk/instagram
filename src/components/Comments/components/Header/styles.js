import styled from 'styled-components';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
`
export const Left = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Right = styled.View`
    margin-right: 15px;
`
export const Name = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: 20px;
    color: black;
    margin-left: 20px;
`

export const Send = styled.Image`
    width:23px;
    margin-top:4px;
    height:23px;
`