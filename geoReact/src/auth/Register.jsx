import './Register.css'

export default function Register({ setCanvi }) {

  return (
    <div className="login">
        <h1>Register</h1>
        <form action="/" method="POST" id="register">
            <input type="text" name="name" placeholder="Nombre"></input><br/>
            <input type="text" name="surname" placeholder="Apellidos"></input><br/>
            <input type="email" name="email" placeholder="Correo electr&oacute;nico"></input><br/>
            <input type="password" name="password" placeholder="Contrase&ntilde;a"></input><br/>
            <input type="password" name="password2" placeholder="Repite la Contrase&ntilde;a"></input><br/>
            <button type="submit">Entrar</button>
            <button type="reset">Limpiar</button>
            <button onClick={() => {setCanvi(true);}}>Canvia a blanc</button>
        </form>
    </div>
  )
}