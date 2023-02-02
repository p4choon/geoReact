import { useContext } from "react";
import { UserContext } from "../userContext";


export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        dhaiodwajioaaaaaaaaaaoiadjioawdaiodwjjado
      </div>
      <hr />
    </>
  );
}
