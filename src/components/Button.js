import React from "react";
import UIfx from "uifx";
import clickMp3 from "../assets/sounds/finger-snap.mp3";
import styled from "styled-components";

let click = null;
try {
  click = new UIfx(clickMp3);
} catch (error) {
  console.warn("Failed to initialize sound:", error);
}

const GenericButton = styled.button`
  background: #ff8a00;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #ffad4c,
    inset 10px 10px 4px #cc6e00;
  border-radius: 1.5vh;
  width: auto;
  min-height: 4vh;
  min-width: 18vw;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 2.8vh;
  line-height: 5vh;
  padding: 1.6vh;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-style: none;
  z-index: 10;
  pointer-events: auto;
  position: relative;
  @media (max-width: 480px) {
    min-height: 6vh;
    font-size: 2.1vh;
    line-height: 3vh;
    min-width: 30vw;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  }
  
  ${props => {
    if(props.primary) {
    return`
      background: #a10094;
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #c202b2,
        inset 10px 10px 4px #8a0072;
      
    `}
    else if(props.primaryR){
    return`
      background: #a10094;
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #c202b2,
        inset 10px 10px 4px #8a0072;
      position: relative;
      
    `}
    else if (props.primaryC) {
      return `
        background: #007bff; /* Primary Blue */
        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #339aff,
          inset 10px 10px 4px #0056b3;
      `;
    }
    }
  }
  
`;

const Button = props => {
  const handleButtonClick = () => {
    console.log("Button clicked with label:", props.label);
    
    if (props.handleClick) {
      try {
        props.handleClick();
        console.log("handleClick executed successfully");
      } catch (error) {
        console.error("Error in handleClick:", error);
      }
    } else {
      console.warn("No handleClick prop provided");
    }
    
    if (click) {
      try {
        click.play();
      } catch (error) {
        console.warn("Error playing sound:", error);
      }
    }
  };

  return (
    <GenericButton
      primary={props.primary}
      primaryR={props.primaryR}
      primaryB={props.primaryB}
      primaryC={props.primaryC}
      className="btn"
      onClick={handleButtonClick}
    >
      {props.label}
    </GenericButton>
  );
};

export default Button;
