import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    height: 100%;
`
export const BackImg = styled.ImageBackground`
    flex: 1;
    /* resizeMode: cover; */
    justify-content: space-between;
`
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`
export const UserName = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 14px;
`
export const PostedTime = styled.Text`
    margin-left: 10px;
    font-weight: 700;
    color: #808080;
    font-size: 13px;
`
export const BottomContainer = styled.View`
    background-color: black;
`
export const IconsContainer = styled.View`
    flex-direction: row;
    margin: 10px 10px 20px 10px;
    background-color: black;
`
export const CameraButton = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
    border-radius: 50px;
`
export const MessageButton = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
`

export const TextInput = styled.TextInput`
    height: 100%;
    color: white;
    font-size: 14px;
`
export const TextInputContainer = styled.View`
    flex: 1;
    border-width: 1;
    border-color: gray;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    height: 50px;
`

export const Heart = styled.Image`
    width:24px;
    margin-top:3px;
    height:24px;
`
export const Send = styled.Image`
    width:23px;
    margin-top:4px;
    height:23px;
`