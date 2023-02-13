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
                {places.map((place) => (

                    <div key={place.id}> {<PlaceList place={place} />} </div>

                ))} 
            </tbody>
        </table>
    </>
  )
}

export default PlacesList
