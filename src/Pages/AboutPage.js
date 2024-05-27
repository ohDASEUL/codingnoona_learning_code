import React from "react";
import {useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate()
  const goToHome=()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHome}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
