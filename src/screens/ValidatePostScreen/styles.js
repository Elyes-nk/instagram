import styled from 'styled-components'

export const Container = styled.View`
        height: 100%;
        width: 100%;
`
export const Img = styled.Image`
        height: 50%;
        width: 100%;
`


export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    height: 55px;
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

export const BottomContainer = styled.View`
    background-color: white;
    border-color: lightgray;
    border-bottom-width: 1px;
    height: 55px;
`
export const IconsContainer = styled.View`
    flex-direction: row;
    margin: 0px 10px 5px 10px;
`
export const CameraButton = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
    border-radius: 50px;
`
export const Ellement = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
`

export const TextInput = styled.TextInput`
    height: 100%;
    color: black;
    font-size: 14px;
`
export const TextInputContainer = styled.View`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
  
`

export const Profile = styled.Image`
    width:35px;
    height:35px; 
    border-radius:100px;

`

export const OptionsContainer = styled.View`
        width: 100%;
        height: 30%;
        background-color: white;
`
export const Option = styled.View`
        width: 100%;
        height: 50px;
        border-color: lightgray;
        border-bottom-width: 1px;
        justify-content: center;
`
export const Text = styled.Text`
        font-size: 15px;
        color: black;
        margin-left: 20px;
`