import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Container, 
    BackImg, 
    UserInfo, 
    UserName, 
    PostedTime, 
    BottomContainer, 
    MessageButton, 
    TextInput, 
    TextInputContainer,
    IconsContainer,
  } from './styles';
import { Context } from '../../context/Context'
import ProfilePicture from "../../components/ProfilePicture";

const StoryScreen = ({route}) => {

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const  { params : {userId} } = route;
  const { stories } = useContext(Context);

  //GET UserStories from selected user
  const UserStories = stories.find(item => item.user.id === userId);

  const handleNextStory = () => {
    if (activeStoryIndex >= UserStories?.stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  }

  if (!UserStories || UserStories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  const activeStory = UserStories.stories[activeStoryIndex];
  console.log('activeStory',activeStory);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handlePress}>
        <BackImg source={activeStory.image}>

          <UserInfo>
            <ProfilePicture uri={UserStories.user.image} size={34} />
            <UserName>{UserStories.user.name}</UserName>
            <PostedTime>{activeStory.postedTime}</PostedTime>
          </UserInfo>

          <BottomContainer>
            <IconsContainer>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Send message"
                  placeholderTextColor={"white"}
                />
              </TextInputContainer>
              <MessageButton>
                <AntDesign name="hearto" size={25} color={"white"} />
              </MessageButton>
              <MessageButton>
                <Ionicons name="paper-plane-outline" size={25} color={"#ffffff"}/>
              </MessageButton>
            </IconsContainer>
          </BottomContainer>

        </BackImg>

      </TouchableWithoutFeedback>
    </Container>
  )
}

export default StoryScreen;
