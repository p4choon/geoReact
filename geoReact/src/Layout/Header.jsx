import { useContext } from "react";
import { UserContext } from "../userContext";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}