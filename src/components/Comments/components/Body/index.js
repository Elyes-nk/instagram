import React, {useEffect, useState} from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components';
import Comment from '../../../Comment';

const Body = ({comments}) => {

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

  const WhiteFlatList = styled.FlatList`
    background-color: white;
    height: ${isKeyboardVisible ? '78%' : '88%' };
  `
  
  return(
  <WhiteFlatList
      data={comments}
      renderItem={({item}) => <Comment comment={item} />}
      keyExtractor={({id}) => id}
  />
)}

export default Body;
