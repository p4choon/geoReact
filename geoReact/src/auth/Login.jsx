import './Login.css'
import React from "react";
import { useState , useContext } from "react";
import { UserContext } from '../userContext';

export default function Login({ setCanvi }) {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {authToken, setAuthToken} = useContext(UserContext);

  const sendLogin = (e) => {
    e.preventDefault();


    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/login", {
      headers: {
        Accept: "application/json",   
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password})  
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


    alert("Dades enviades:  " + email + "/" + password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="email" name="email" placeholder="Correo electr&oacute;nico" onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" name="password" placeholder="Password" required="required" onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit" className="btn btn-primary btn-block btn-large" onClick={(e) => {sendLogin(e)}}>Login</button>
        <br/>
        <button className="btn btn-primary btn-block btn-large" onClick={() => {setCanvi(false);}}>Canvia a Register</button>
      </form>
    </div>
  )
}

