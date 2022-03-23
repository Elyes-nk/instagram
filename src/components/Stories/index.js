import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import Story from '../Story';
import { Context } from "../../context/Context";

const Stories = () => {
  
  const { stories } = useContext(Context);

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
