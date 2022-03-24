import React, { createContext, useEffect, useState } from "react";
import postsData from '../data/posts';
import storiesData from '../data/stories';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  token: null,
  stories: [],
  posts: []
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {

  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setPosts(postsData)
  }, [posts]);

  useEffect(() => {
    setStories(storiesData)
  }, [stories]);

  useEffect(() => {
    handleCheckToken()
  }, []);

  const handleCheckToken = async() => {
    try{
      const tkn = await AsyncStorage.getItem('token')
      if(tkn){
        setIsConnected(true)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Context.Provider
      value={{
        isConnected: isConnected,
        setIsConnected: setIsConnected,
        stories: stories,
        setStories: setStories,
        posts: posts,
        setPosts: setPosts
      }}
    >
      {children}
    </Context.Provider>
  );
};
