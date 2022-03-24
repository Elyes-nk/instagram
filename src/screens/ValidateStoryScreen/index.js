import React, { useState, useEffect, useContext }  from 'react';
import {
    Container,  
    Img
} from './styles';
import ValidateFooter from '../../components/Create/components/ValidateFooter';
import { SafeAreaView } from 'react-native';
import { Context } from '../../context/Context'
import { useNavigation } from '@react-navigation/native';
import profile from '../../assets/images/icons/profile.jpeg';

const ValidateStoryScreen = ({route}) => {

    const  { params : {path} } = route;
    const [image, setImage] = useState();
    const navigation = useNavigation();
    const { stories, setStories } = useContext(Context);

    useEffect(() => {
        setImage(`${Platform.OS === "android" ? 'file://' : ''}${path}`)
    }, []);

    //FUNCTION CREATE Story
    const handleCreateStory = () => {
        if (image) {
        let newArray = stories;
        newArray.unshift(
            {
                stories: [
                    {
                      image : {uri : image},
                      postedTime: '2 s',
                    }
                  ],
                user: {
                    id : 10,
                    name : "elyes-nk",
                    image : profile,
                },
        }
        );
        setStories(newArray);
        setImage(null);
        navigation.navigate("Home")
        }
    }
   
  return(
    <SafeAreaView>
        <Container>
            <Img 
                source={{uri : `${Platform.OS === "android" ? 'file://' : ''}${path}`}}
            />
            <ValidateFooter 
                handleCreateStory={handleCreateStory}s
            />
        </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
