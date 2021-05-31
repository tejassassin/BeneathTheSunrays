import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loadcont">
        <p id="l1">𝓑𝓮𝓷𝓮𝓪𝓽𝓱𝓣𝓱𝓮𝓢𝓾𝓷𝓻𝓪𝔂𝓼</p>
      </div>
      <ReactLoading type="bubbles" color="orange" height={100} width={175} />
    </div>
  );
}
