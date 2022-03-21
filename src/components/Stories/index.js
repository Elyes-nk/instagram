import React from 'react';
import { FlatList } from 'react-native';
import Story from '../Story';
import stories from '../../data/stories';

const Stories = () => {
  return (
    <FlatList
      data={stories}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story story={item}/>}
    />
  )
}

export default Stories;
