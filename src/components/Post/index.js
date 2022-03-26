import React, { useState, useEffect }  from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({ post }) =>{
  
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  }

  useEffect(() =>{
    setLikesCount(post.likes)
  }, [])
  
  return(
    <View>
      <Header imageUri={post.user.image} name={post.user.name} />
      <Body 
        imageUri={post.image}
        onLikePressed={onLikePressed}
      />
      <Footer
        likesCount={likesCount}
        onLikePressed={onLikePressed}
        isLiked={isLiked}
        caption={post.caption}
        postedAt={post.createdAt}
        comments={post.comments}
        name={post.user.name} 
        id={post.id}
      />
    </View>
)}

export default Post;
