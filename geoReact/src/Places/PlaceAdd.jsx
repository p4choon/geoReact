import React from "react";
import { useState , useContext } from "react";
import { UserContext } from '../userContext';

export default function PlaceAdd({ setCanvi }) {

  let [formulari, setFormulari] = useState({});
  let {authToken, setAuthToken} = useContext(UserContext);

  const handleChange = (e) => {
    e.preventDefault();

    setFormulari({  
      ...formulari,
      [e.target.name]: e.target.value
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    let { name, password, password2, email } = formulari;

    alert(
      "He enviat les Dades:  " +
        name +
        "/" +
        email +
        "/" +
        password +
        "/" +
        password2
    );

    if (password2 !== password) {
      alert("Els passwords han de coincidir");
      return false;
    }

    fetch ("https://backend.insjoaquimmir.cat/api/places",{
        headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authToken
        },
        method: "POST",
        body: formData
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          alert(resposta.authToken);
          setAuthToken(resposta.authToken);
        }
      })
      .catch((data) => {
        console.log(data);
        alert("Catchch");
      });

  };


  return (
    <div className="login">
        <h1>Register</h1>
        <form action="/" method="POST" id="register">
            <input type="text" name="name" placeholder="Nombre"></input><br/>
            <input type="text" name="description" placeholder="description" ></input><br/>
            <input type="text" name="upload" placeholder="upload" ></input><br/>
            <input type="text" name="laitude" placeholder="laitude" ></input><br/>
            <input type="text" name="longitude" placeholder="longitude" ></input><br/>
            <input type="text" name="visibility" placeholder="visibility"></input><br/>
            <button className="btn btn-primary btn-block btn-large">Publicar</button>
            <br></br>
            <button className="btn btn-primary btn-block btn-large" type="reset">Limpiar</button>
        </form>
    </div>
  )
}