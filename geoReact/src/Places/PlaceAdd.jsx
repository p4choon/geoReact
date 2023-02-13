import React from "react";
import { useState , useContext, useEffect } from "react";
import { UserContext } from '../userContext';
import { useNavigate } from "react-router-dom";

export default function PlaceAdd({ setCanvi }) {

    let [formulari, setFormulari] = useState({});
    let {authToken, setAuthToken} = useContext(UserContext);
    let navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.type && e.target.type==="file")
        {
        setFormulari({
        ...formulari,
        [e.target.name] : e.target.files[0]
        })
        } else {
        setFormulari({
        ...formulari,
        [e.target.name] : e.target.value
        })}
    };
    const sendPlace = async (e) => {
        e.preventDefault();

        let {name,description,upload,latitude,longitude,visibility=1}=formulari;

        var formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("upload", upload);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("visibility", visibility);

        try {
            const data = await fetch("https://backend.insjoaquimmir.cat/api/places",{
                headers: {
                'Accept': "application/json",
                'Authorization': 'Bearer ' + authToken,
              },
              method: "POST",
              body: formData
            });

            const resposta = await data.json();
            if (resposta.success === true) {
                console.log("CREADO BIEN")
                navigate("/places/list");
                setFormulari({});
            }
            else{console.log("ERROR")};
          } catch {
            console.log("Error");
          };
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( (pos )=> {
            setFormulari({
            ...formulari,
            latitude : pos.coords.latitude,
            longitude: pos.coords.longitude
            })
            console.log("Latitude is :", pos.coords.latitude);
            console.log("Longitude is :", pos.coords.longitude);
            });
        },[])

  return (
    <div className="login">
        <h1>Register</h1>
        <form action="/" method="POST" id="register">
            <input type="text" name="name" value={formulari.name} onChange={ handleChange} placeholder="name" /><br/>
            <input type="text" name="description" value={formulari.description} onChange={ handleChange} placeholder="description" ></input><br/>
            <input type="file" name="upload" onChange={ handleChange} placeholder="upload" ></input><br/>
            <input type="text" name="latitude" value={formulari.latitude} onChange={ handleChange} placeholder="laitude" ></input><br/>
            <input type="text" name="longitude" value={formulari.longitude} onChange={ handleChange} placeholder="longitude" ></input><br/>
            <input type="text" name="visibility" value={formulari.visibility} onChange={ handleChange} placeholder="visibility"></input><br/>
            <button className="btn btn-primary btn-block btn-large" onClick={(e) => {sendPlace(e);}} type="submit">Publicar</button>
            <br></br>
            <button className="btn btn-primary btn-block btn-large" type="reset">Limpiar</button>
        </form>
    </div>
  )
}