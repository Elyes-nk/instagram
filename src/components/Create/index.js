import React, {useState}  from 'react'
import NewPost from './components/NewPost'
import NewStory from './components/NewStory'

function index() {
  const [isPostSelected, setIsPostSelected] = useState(false);

  return (
    isPostSelected ? 
      <NewPost
        isPostSelected={isPostSelected}
        setIsPostSelected={setIsPostSelected}
      />
      :
      <NewStory 
        isPostSelected={isPostSelected}
        setIsPostSelected={setIsPostSelected}
      />
  )
}

export default index