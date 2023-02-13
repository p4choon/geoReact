import React from 'react'
import { UserContext } from '../userContext';
import { useContext } from 'react';

const PostGrid = ({post}) => {
  
  return (
    <>
          <div>
            <div><img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} width="400px" height="400px" alt="{post.name}"></img></div>
            <div>{post.name}</div>
            <div>{post.description}</div>


          </div>
    </>

  )
}

export default PostGrid