import React from "react";
import  "./main.css"
import Hero from '../images/hero.png'

const Home = () => {
  return (
    <>
      <div className="container-fluid g-0 text-dark mainContainer">
       <div className="row d-flex align-items-center  justify-content-center mx-auto" >
          <div className="col-lg-6 ">
            <h1 className=" fw-bold">Upgrade Your Lifestyle With Nunity</h1>
          </div>
          <div className="col-lg-6">
            <img 
            src={Hero}
            alt="clothes"
            />
          </div>
       </div>
       
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L30,197.3C60,203,120,213,180,186.7C240,160,300,96,360,69.3C420,43,480,53,540,80C600,107,660,149,720,165.3C780,181,840,171,900,192C960,213,1020,267,1080,282.7C1140,299,1200,277,1260,234.7C1320,192,1380,128,1410,96L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
    </>
  );
};

export default Home;
