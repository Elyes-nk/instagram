import React from 'react';
import { SafeAreaView } from 'react-native';
import Comments from '../../components/Comments';

const CommentsScreen = ({route}) => { 
  const  { params : {postId} } = route;
  return(
    <SafeAreaView>
      <Comments postId={postId}/>
    </SafeAreaView>
  )
}

export default CommentsScreen;
