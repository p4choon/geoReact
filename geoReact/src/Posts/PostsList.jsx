import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostList from './PostList';

const PostsList = () => {
  let [posts, setPosts] = useState([]);
  let [error, setError] = useState("");
  let { authToken, setAuthToken } = useContext(UserContext);
  
  const getPosts= async () => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,
        },
        method: "GET",
      });
      const resposta = await data.json();
      if (resposta.success === true) {
        setPosts(resposta.data);
        console.log(resposta.data
        )

      }
      else setError(resposta.message);
    } catch {
      console.log("Error");
      alert("Catchch");
    };

  }

  useEffect(() => {
    getPosts();

  }, []);

  return (
    <>
        <table>
            <thead>
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">Body</td>
                    <td scope="col">File</td>
                    <td scope="col">Latitude</td>
                    <td scope="col">Longitude</td>
                    <td scope="col">Visibility</td>
                    <td scope="col">Author</td>
                    <td scope="col">Created</td>
                    <td scope="col">Updated</td>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (

                    <div key={post.id}> {<PostList post={post} />} </div>

                ))} 
            </tbody>
        </table>
    </>
  )
}

export default PostsList
