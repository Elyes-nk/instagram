import styled from 'styled-components';

export const BottomContainer = styled.View`
    background-color: black;    
    height: 8%;
`   
export const IconsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    background-color: black;
`

export const Icon = styled.View`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 45px; 
    background-color: white;
`

export const TextMessage = styled.Text`
    color: white;
    font-size: 13px;
    margin: 10px;
`
export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    background-color: #212020;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    height: 45px;
    width: 38%;
`
export const Profile = styled.Image`
    height: 20px;
    border-radius: 20px;
    width: 20px;
`

export const Star = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    background-color: #73cb51;
    border-width: 1px;
    border-color: white;
`