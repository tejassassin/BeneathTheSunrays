import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
// import { PermPhoneMsgRounded } from "@material-ui/icons";

export default function Newsletter({duration}) {

  const [msg, setMsg] = useState([]);


  toast.configure();
  
  function sendEmail(e) {
    e.preventDefault();
    console.log(msg)

    emailjs
      .sendForm(
       "service_25ypmdo", // "service_h57lheb",
    "template_eihu6nn", //     "template_orbvk4i",
        e.target,
        "user_eUYKZ7u2rsxvu5Li12kiW" // "user_RnNzzxmG47MPJ8pSy4Sad",
      )
      .then(
        (result) => {
          toast.success("I will get back to you soon !!!", {
            autoClose: 3000,
          });
          console.log(result.text);
        },
        (error) => {
          toast.error("Oops!! theres seems to be an error...", {
            autoClose: 3000,
          });
          console.log(error.text);
        }
      );
    // toast.success("Thank you for subscribing to my Newsletter!!", {
    //   autoClose: 3000,
    // });
    e.target.reset();
    setMsg("")
  }

  // var win = window.innerWidth<550;

  return (
    <Fade >
      <div className="newsletter-section">
        <Fade bottom cascade duration={duration}>
            <div className="section-title" style={{ marginTop: "2em" }}>
              Aapki Chitthi
            </div>
        </Fade>
        <div className="news-cont">
          <div className="newsletter">
            <div className="newimg"></div>
            <div className="newform">
              <div className="newtitle">
                Get chitthi of hope, happiness and everything lively to cheer up
                your day.
              </div>
              <div className="newinput">
                <form onSubmit={sendEmail}>
                  <input
                    type="email"
                    placeholder="Get positivity delivered..."
                    name="email"
                    required
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                  />
                  <button type="submit">Yes, please !!</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
