import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'
import { useState } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {useNavigate} from 'react-router-dom';

import "./styling.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }
  if(remainingTime<300)
{
  return (
    <div className="timer">
       
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>);
}else{
  return (
    <div className="timer">
   </div>);

} 
};
const Guess = () =>{
  const Navigate = useNavigate();
  return (
    
    <div className="App">
      
      <div className="timer-wrapper">
      <button className ="button">
          Submit?
        </button>
        <div className="la">Letters definitely in the word...<br/></div>
        <div className="la">Letters NOT in the word...<br/></div>
        <div id="timer">
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          duration={1000}
          trailColor ={"#00000"}
          colors={["#ffffff"]}
          colorsTime={[1000]}
          size={50}
          onComplete={() => {Navigate('/Lose');}}
        >
          {renderTime}
        </CountdownCircleTimer>
        </div>
       
      </div>

    <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
    </div>
  );
}
export default Guess;
