import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about">
      <div className="card">
        <Fade bottom cascade>
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
              <a href="/about" className="btn">
                Know more
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
