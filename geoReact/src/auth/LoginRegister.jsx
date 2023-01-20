import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function App() {
    // difere`cnai entre emprar i no emprar state

    let [isLogin, setLogin] = useState(true);

    return(
        <div className="App">
            {isLogin ? <Login setCanvi={setLogin} /> : <Register setCanvi={setLogin} />}
        </div>
    )
   
}