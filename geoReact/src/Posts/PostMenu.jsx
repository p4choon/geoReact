import React from 'react'
import { Link } from 'react-router-dom'

export default function PostMenu() {
    return(
        <>
            <div>
                <Link to="/posts/add">Afegir + </Link>
                <Link to="/posts/grid">Grid </Link>
                <Link to="/posts/list">Lista </Link>
            </div>
        </>
    )
}
  
