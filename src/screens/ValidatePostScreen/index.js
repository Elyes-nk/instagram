import React, {useState, useContext, useEffect}  from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ValidateFooter from '../../components/Create/components/ValidateFooter';
import {
  Container,  
  Img,
  HeaderContainer,
  Left,
  Right,
  Name,
  BottomContainer,
  IconsContainer,
  Ellement,
  Profile,
  TextInputContainer,
  TextInput,
  OptionsContainer,
  Option,
  Text
} from './styles';
import profile from '../../assets/images/icons/profile.jpeg';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/Context'

const ValidateStoryScreen = ({route}) => {

  const  { params : {path} } = route;
  const navigation = useNavigation();
  const { posts, setPosts } = useContext(Context);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    setImage(`${Platform.OS === "android" ? 'file://' : ''}${path}`)
  }, []);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      () => { setKeyboardVisible(true); },
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
      () => { setKeyboardVisible(false); },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleCreatePost = () => {
    if (image) {
      let newArray = posts;
      newArray.unshift(
        {
          id : 10,
          caption : caption,
          image: {uri : image},
          likes: 0,
          createdAt: "2 s",
          user: {
              id : 10,
              name : "elyes-nk",
              image : profile,
          },
          comments: [],
      }
      );
      setPosts(newArray);
      setImage(null);
      navigation.navigate("Home")
    }
  }

  return(
    <SafeAreaView>
        <Container>
          <HeaderContainer>
            <Left>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create")}>
                <AntDesign name="arrowleft" size={25} style={{color: "black"}} />
              </TouchableWithoutFeedback>
              <Name>New Post</Name>
            </Left>
            <Right>
              <TouchableWithoutFeedback onPress={() => handleCreatePost()}>
                <AntDesign name='check' size={30} style={{color:'#0095f6'}} />
              </TouchableWithoutFeedback>
            </Right>
          </HeaderContainer>
          <Img 
              source={{uri : `${Platform.OS === "android" ? 'file://' : ''}${path}`}}
              resizeMode='cover'
              reload
          />
          <BottomContainer>
            <IconsContainer>
              <Ellement>
                <Profile source={profile} />
              </Ellement>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Write a caption..."
                  placeholderTextColor={"lightgray"}
                  onChangeText={txt => setCaption(txt)}
                />
              </TextInputContainer>
            </IconsContainer>
          </BottomContainer>
          {!isKeyboardVisible &&
            <>
                <OptionsContainer>
                  <Option>
                    <Text>Tag people</Text>
                  </Option>
                  <Option>
                    <Text>Add location</Text>
                  </Option>
                  <Option>
                    <Text>Add fundraiser</Text>
                  </Option>
                </OptionsContainer>
                <ValidateFooter />
            </>
          }
      </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
