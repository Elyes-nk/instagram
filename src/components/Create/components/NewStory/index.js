import React, {useState}  from 'react';
import {
    Container,    
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

import Footer from '../Footer';

export default function NewStory({isPostSelected, setIsPostSelected}) {

    const navigation = useNavigation();

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [cameraFlip, setCameraFlip] = useState(RNCamera.Constants.Type.back);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/NewStory.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
            navigation.navigate("ValidateStory", { path : newFilePath})
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Container>
            <RNCamera
                ref={cameraRef}
                type={cameraFlip}
                style={{flex:1, alignItems:"center",justifyContent: "flex-end"}}
            />
            <Footer 
                isPostSelected={isPostSelected} 
                setIsPostSelected={setIsPostSelected} 
                captureHandle={captureHandle}
                cameraFlip={cameraFlip}
                setCameraFlip={setCameraFlip}
            />
        </Container>  
    );
}
