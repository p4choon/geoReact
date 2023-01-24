import './Register.css'
import { useState } from "react";

export default function Register({ setCanvi }) {

  let [formulari, setFormulari] = useState({});

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

    fetch("https://backend.insjoaquimmir.cat/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      // Si els noms i les variables coincideix, podem simplificar
      body: JSON.stringify({ name, email, password })
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

      alert("He enviat les Dades:  " + email + "/" + password);

  };


  return (
    <div className="login">
        <h1>Register</h1>
        <form action="/" method="POST" id="register">
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange}></input><br/>
            <input type="email" name="email" placeholder="Correo electr&oacute;nico" onChange={handleChange}></input><br/>
            <input type="password" name="password" placeholder="Contrase&ntilde;a" onChange={handleChange}></input><br/>
            <input type="password" name="password2" placeholder="Repite la Contrase&ntilde;a" onChange={handleChange}></input><br/>
            <button className="btn btn-primary btn-block btn-large" onClick={(e) => {handleRegister(e);}}>Register</button>
            <br></br>
            <button className="btn btn-primary btn-block btn-large" type="reset">Limpiar</button>
            <br></br>
            <button className="btn btn-primary btn-block btn-large" onClick={() => {setCanvi(true);}}>Canvia a login</button>
        </form>
    </div>
  )
}