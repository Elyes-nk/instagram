import React, { useState, useEffect } from 'react';
import {
    Container,
    Preview    
} from './styles';
import { launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Footer from '../Footer';
import { useNavigation } from '@react-navigation/native';

export default function NewPost({isPostSelected, setIsPostSelected}) {

    const navigation = useNavigation() 

    const chooseImage = () => {
        options = {
            storageOptions : {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchImageLibrary(options, response => {
            if(response.didCancel){
                setIsPostSelected(false)
            }else if(response.error) {
                console.log(response.error);
            }else{
                const filePath = response.assets[0].uri;
                const newFilePath = RNFS.ExternalDirectoryPath + '/NewPost.jpg';
                RNFS.moveFile(filePath, newFilePath)
                    .then(() => {
                        console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                navigation.navigate("ValidatePost", { path : newFilePath})
            }
        });
    }

    useEffect(() => {
        chooseImage()
    }, []);

    return (
        <Container>
            <Preview />
            <Footer 
                isPostSelected={isPostSelected} 
                setIsPostSelected={setIsPostSelected} 
            />
        </Container>  
    );
}
