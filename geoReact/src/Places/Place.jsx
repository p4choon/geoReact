import React from "react";
import { useParams } from "react-router-dom";
export default function Place() {
    const { id } = useParams();
    return <h1>Places {id}</h1>;
}
  