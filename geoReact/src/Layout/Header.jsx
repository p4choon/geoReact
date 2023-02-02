import { useContext, useEffect } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";
import {useState} from "react";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);
  let [ nom, setNom] = useState("");
  let [ roles, setRoles] = useState([]);

  useEffect(async () => {

    try {
      console.log("Comprovant credencials....");
      // Enviam dades a l'aPI i recollim resultat
      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          Accept: "application/json",   
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })

      const resposta = await data.json();
       if (resposta.success === true) console.log(resposta.user), console.log(resposta.roles), setNom(resposta.user.name), setRoles(resposta.roles);
      //  {setRoles(resposta.roles)
      } catch {
          console.log(data);
          alert("Catchch");
      };
    },[]);

  const logout = (e) => {
    e.preventDefault();


    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/logout", {
      headers: {
        Accept: "application/json",   
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,
      },
      method: "POST"

    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {setRoles(resposta.roles)
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
    <>
      <div>
        <Link to="/places">Cosess </Link>
        <Link to="/posts">Enlloc </Link>
        <Link to="/about">About </Link>
        Token: <strong>{authToken}</strong>
        <p>{nom}</p>
        <p>{ roles.map ((v)=> (<span key={v}> {v} </span>))}</p>
        <button type="submit" className="btn btn-primary btn-block btn-large" onClick={(e) => {logout(e)}}>Logout</button>
      </div>
      <hr />
    </>
  );
}
