import React, { useContext } from 'react';
import Post from "../Post";
import Stories from "../Stories";
import { WhiteFlatList } from './styles';
import { Context } from "../../context/Context";

const Feed = () => {

  const { posts } = useContext(Context);

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
