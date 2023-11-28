import React from 'react';
import {Link} from "react-router-dom"
import "./ErrorPage.css";


const Success = () => {
  return (
    <div className='center'>
      <h1>
      Feedback Submitted Successfully !!
    </h1>
    <Link to={"/postfeedback"}></Link>
    </div>
  );
};

export default Success;