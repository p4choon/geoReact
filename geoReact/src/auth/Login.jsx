import './Login.css'

export default function Login({ setCanvi }) {

  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
          <input type="password" name="p" placeholder="Password" required="required" />
          <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
          <button onClick={() => {setCanvi(false);}}>Canvia a Register</button>
      </form>
    </div>
  )
}

