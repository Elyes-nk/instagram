import React, { useState, useEffect }  from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import postsData from '../../data/posts';

const Comments = ({postId}) =>{

const post = postsData.find(item => item.id === postId);
const [comments, setComments] = useState(null);

useEffect(() => {
  setComments(post?.comments)
}, [post]);

return(
    <View>
      <Header />
      <Body 
        comments={comments}
      />
      <Footer
        comments={comments}
        setComments={setComments}
      />
    </View>
  )}
  
  export default Comments;
  