import React from "react";
import { useParams } from "react-router-dom";
export default function PostEdit() {
    const { id } = useParams();
    return <h1>Editando post {id}</h1>;
}
  