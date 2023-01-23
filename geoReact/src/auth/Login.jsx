import './Login.css'
import { useState } from "react";


export default function Login({ setCanvi }) {

  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

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
      body: JSON.stringify({ email: email, password: password })
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          alert(resposta.authToken);
        }
      })
      .catch((data) => {
        console.log(data);
        alert("Catchch");
      });


    alert("Dades enviades:  " + name + "/" + password);
  };

  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="name" placeholder="Nombre" required="required" onChange={(e) => {setName(e.target.value)}}/>
        <input type="password" name="password" placeholder="Password" required="required" onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit" class="btn btn-primary btn-block btn-large" onClick={(e) => {sendLogin(e)}}>Login</button>
        <br/>
        <button class="btn btn-primary btn-block btn-large" onClick={() => {setCanvi(false);}}>Canvia a Register</button>
      </form>
    </div>
  )
}

