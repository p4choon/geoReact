import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlaceList from './PlaceList';

const PlacesList = () => {
  let [places, setPlaces] = useState([]);
  let [error, setError] = useState("");
  let { authToken, setAuthToken } = useContext(UserContext);
  
  const getPlaces = async () => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,
        },
        method: "GET",
      });
      const resposta = await data.json();
      if (resposta.success === true) {
        setPlaces(resposta.data);
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
    getPlaces();

  }, []);

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Body</th>
                    <th scope="col">File</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Visibility</th>
                    <th scope="col">Author</th>
                    <th scope="col">Created</th>
                    <th scope="col">Updated</th>
                </tr>
            </thead>
            <tbody>
                {places.map((place) => (

                    <tr key={place.id}> <PlaceList place={place} /> </tr>

                ))} 
            </tbody>
        </table>
    </>
  )
}

export default PlacesList
