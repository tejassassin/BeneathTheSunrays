import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function Login() {
  const [{}, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor:"#f8de7e"

      }}
    >
      <div
        onClick={signin}
        style={{
          fontSize: "4em",
          cursor: "pointer",
          padding:"0.3em 1em",
          backgroundColor:"#ffa351",
          color:"white",
          borderRadius:"20px"
        }}
      >
        Login
      </div>
    </div>
  );
}
