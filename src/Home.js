import React from "react";

 
import pic2 from "./homepageimages/healthservices-large.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="headtext" style={{ position: "relative" }}>
        <div
          className="headimage"
          style={{ filter: "blur(2px)", WebkitFilter: "blur(2px)" }}
        >
          <img
            className="first"
            src="https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Health-Banner-option-_1_.jpg"
            style={{
              zIndex: "-1",
            }}
          />
        </div>
        <div
          className="text-on-image"
          style={{
            position: "absolute",
            right: "30%",
            left: "40%",
            bottom: "40%",
          }}
        >
          <h3
            style={{
              color: "White",
              fontSize: "36px",
            }}
          >
            {" "}
            HEALTHCARE FOR ALL
          </h3>
          <p style={{
            color:"white"
          }}>Changes that inspire us</p>
        </div>
      </div>
      {/* <img   className='first' src={pic1}/> */}
      <img className="first" src={pic2} />
    </div>
  );
};

export default Home;