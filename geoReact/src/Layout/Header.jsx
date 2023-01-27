import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";


export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        <Link to="/coses">Cosess </Link>
        <Link to="/enlloc">Enlloc </Link>
        <Link to="/about">About </Link>
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}
