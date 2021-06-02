import React from "react";
import { Carousel } from "react-responsive-carousel";
import InstagramEmbed from "react-instagram-embed";

export default function Insta() {
  return (
    <div className="insta">
      <div className="insta-title">Find us on instagram @beneathTheSunRays</div>

      <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <Carousel className="insta-car" thumbWidth={200}>
        <div className="slide-2">
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
        </div>
        <div className="slide-2">
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
        </div>
      </Carousel>
    </div>
  );
}
