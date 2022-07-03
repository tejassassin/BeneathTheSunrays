import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function About({ duration }) {

  return (
    <div className="about">
      <div className="card">
        <Fade bottom cascade duration={duration}>
          <div className="card-content">
            <div className="card-title">
              About Me
              <div className="subtitle">
                Kya aap mere baare me janna chahoge?
              </div>
            </div>
            <div className="card-body">
              Empathetic, breath on vibes, lost and lively at the same time,
              loves handwritten letters and pressed flowers, mostly kind.
            </div>
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `/about`,
                }}
                className="btn"
              >
                Know more
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
