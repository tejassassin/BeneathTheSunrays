import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export default function CardDeck({projects}) {

  const [showimg, setShowimg] = useState(false);
  const [currimg, setCurrimg] = useState(false);



  // console.log(projects)

  const closeImg = () => {
    setShowimg(!showimg);
  };

  const openImg = (imgs, id) => {
    // console.log("hi");

    setShowimg(!showimg);
    setCurrimg(imgs)
    console.log(imgs)
    console.log(id)


  };

  return (
    
    <div className="card-container" >
      {/* <Fade > */}
      <div className="card-list" >
        {projects && projects.map((project) => (
        
              <div
              key={project.id}
                onClick={() => openImg(project.data.imgs, project.id)}
                className="card card-deck text-light"
                // key={project.id}
                style={{
                  backgroundImage: `url(${project?.data?.imgs[0]})`,
                }}
              >
                {project?.data?.imgs?.length !== 1 && <div id="caption" style={{padding:"0", bottom:"-97%"}} >1/{project.data.imgs.length}</div>}
              </div>
              
        ))}
        <div 
          id="myModal" 
          className="modal" 
          style={{ opacity: !showimg && "0", visibility: !showimg && "hidden" }}
        >
          <span 
            className="close"
            onClick={closeImg}
          >&times;</span>

        {showimg &&
              <Carousel
              className="car-1"
              emulateTouch
              infiniteLoop
              thumbWidth={200}
              responsive={responsive}
              
              >
                {
                  currimg.map((img, idx)=>(
                    <div key={idx}>
                        <div 
                          id="img"
                          style={{
                            backgroundImage: `url(${img})`,
                          }}
                          >
                      {currimg.length !==1 && <div id="caption">{idx+1}/{currimg.length}</div>}
                          </div>
                    </div>
                  ))
                }
                
              </Carousel>
            }
          
        </div>
        </div>

        {/* </Fade > */}
        </div>



  );
}
