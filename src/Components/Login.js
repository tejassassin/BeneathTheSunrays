import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function Login() {
  const [{user}, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result)
        if(result.additionalUserInfo.profile.email === "beneaththesunrays@gmail.com"){
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        }
        else{
          alert("Please use the correct google profile !!!")
        }
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
