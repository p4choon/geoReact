import React from 'react'
import { Link } from 'react-router-dom'

export default function PlaceMenu() {
    return(
        <>
            <div>
                <Link to="/places/add">Afegir + </Link>
                <Link to="/places/grid">Grid </Link>
                <Link to="/places/list">Lista </Link>
            </div>
        </>
    )
}
  
