import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

export default function Footer({ pposts }) {

  const [msg, setMsg] = useState([]);


  toast.configure();
  function sendEmail(e) {
    e.preventDefault();
    console.log(msg)

    emailjs
      .sendForm(
        "service_h57lheb",// "service_25ypmdo", "service_h57lheb",
        "template_orbvk4i", // "template_eihu6nn", "template_orbvk4i",
        e.target,
        "user_RnNzzxmG47MPJ8pSy4Sad", // "user_eUYKZ7u2rsxvu5Li12kiW"  //67adf438010fd8aa9ae7618e8d8e06ec
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


  return (
    <footer className="footer">
      <div className="footer-left">
        <Fade>
          <div className="footer-left-title">Popular posts</div>
          <ul>
            {pposts.map((post, i) => (
              <li key={i}>
                <a href={`/blogs/${post.id}`}>{post?.data?.title}</a>
              </li>
            ))}
          </ul>
        </Fade>
      </div>

      <div className="footer-middle">
        <Fade>
          <div className="foot-news">
            <div className="foot-form">
              <div className="foot-newtitle">
                Get chitthi of hope, happiness and everything lively to cheer up
                your day.
              </div>
              <div className="foot-newinput">
                <form onSubmit={sendEmail}>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    name="email"
                    value={msg}
                    required
                    onChange={(e)=>setMsg(e.target.value)}
                  />
                  <button type="submit">Yes, please !!</button>
                </form>
                {/* <input type="email" placeholder="Enter your email..." />
                <button>Yes, please !!</button> */}
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="footer-right">
        <Fade>
          <div className="footer-contact">
            <div>Mail us:</div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=beneaththesunrays@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                beneaththesunrays@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <div>DM us:</div>
            <div>
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                @beneaththesunrays
              </a>
            </div>
          </div>
          <div className="footer-contact">Show some love:</div>

          <div className="footer-socials">
            <div className="in">
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png"
                  alt="instagram"
                />
              </a>
            </div>
            <div className="pin">
              <a
                href="https://in.pinterest.com/beneaththesunrays/_created/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  // src="https://www.freepnglogos.com/uploads/pinterest-logo-circle-p-in-red-png-24.png"
                  src="https://www.freepnglogos.com/uploads/pinterest-soft-logo-png-16.png"
                  style={{height:"1.7em", width:"1.7em"}}

                  alt="pinterest"
                />
              </a>
            </div>
            <div className="fb">
              <a
                href="https://www.facebook.com/beneaththesunrays.in"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/fa314a/facebook-new.png"
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
