import React from "react";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  toast.configure();
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.message);

    // emailjs
    //   .sendForm(
    //     "service_h57lheb",
    //     "template_orbvk4i",
    //     e.target,
    //     "user_RnNzzxmG47MPJ8pSy4Sad"
    //   )
    //   .then(
    //     (result) => {
    //       toast.success("I will get back to you soon !!!",{
    //         autoClose:3000
    //       });
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       toast.error("Oops!! theres seems to be an error...",{
    //         autoClose:3000
    //       });
    //       console.log(error.text);
    //     }
    //   );
    toast.success("Thank you for subscribing to my Newsletter!!", {
      autoClose: 3000,
    });
    e.target.reset();
  }

  return (
    <Fade bottom cascade>
      <div className="newsletter-section">
        <div className="section-title" style={{ marginTop: "2em" }}>
          Aapki Chitthi
        </div>
        {/* <div className="section-subtitle"></div> */}

        <div className="news-cont">
          <div className="newsletter">
            <div className="newimg"></div>
            <div className="newform">
              <div className="newtitle">
                Get chitthi of hope, happiness and everything lively to cheer up
                your day.
              </div>
              {/* <div className="newdesc">I wanna send you my blogs...</div> */}
              <div className="newinput">
                <form onSubmit={sendEmail}>
                  <input type="email" placeholder="Enter your email..." />
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
