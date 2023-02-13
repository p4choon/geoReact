import React from 'react'
import { UserContext } from '../userContext';
import { useContext } from 'react';

const PlaceGrid = ({place}) => {
  
  return (
    <>
        
                  
          <td>{place.name}</td>
          <td>{place.description}</td>
          <td>{place.longitude}</td>
          <td>{place.latitude}</td>
          <td>{place.author.name}</td>
          <td>{place.favourites_count}</td>
                    
        
    </>
  )
}
export default PlaceGrid