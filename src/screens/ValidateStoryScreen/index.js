import React, { useState }  from 'react';
import {
    Container,  
    Img
} from './styles';
import ValidateFooter from '../../components/Create/components/ValidateFooter';
import { SafeAreaView } from 'react-native';

const ValidateStoryScreen = ({route}) => {

    const  { params : {path} } = route;

   

  return(
    <SafeAreaView>
        <Container>
            <Img 
                source={{uri : `${Platform.OS === "android" ? 'file://' : ''}${path}`}}
            />
            <ValidateFooter />
        </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
