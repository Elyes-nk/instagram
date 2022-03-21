import React from 'react';
import Post from "../Post";
import Stories from "../Stories";
import posts from '../../data/posts'
import { WhiteFlatList } from './styles';

const Feed = () => {
  return (
    <WhiteFlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  )
}

export default Feed;
