import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import iphone from "../photo/iphone.png";
import Knock from "../photo/knock.gif";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
    font-size: 7rem;
  }
`;

const Myskill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FrontText = styled.div`
  position: absolute;
  left: 2%;
  z-index: 2;
  font-size: 7rem;
  color: #d1d1d1;

  animation: ${slideInFromRight} 1s ease;
`;
const EndText = styled.div`
  position: absolute;
  right: 5%;
  z-index: 2;
  font-size: 8rem;
  color: #d1d1d1;

  animation: ${slideInFromRight} 1s ease;
`;
const IphoneImage = styled.div`
  background-image: url(${iphone});
  background-size: cover;
  width: 22rem;
  min-width: 21rem;
  border-radius: 3rem;
  margin-top: 5rem;
  height: 92.5vh;
  position: absolute;
  z-index: 1;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const KnockImage = styled.div`
  background-image: url(${Knock});
  background-size: cover;
  border-radius: 2rem;
  width: 19rem;
  min-width: 19rem;
  height: 87vh;
  margin-left: 0.3rem;
  position: absolute;
  z-index: 0;
  margin-top: 5rem;
`;

function Secondpage() {
  const [animateFrontText, setAnimateFrontText] = useState(false);
  const [animateEndText, setAnimateEndText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showFrontText = scrollY > 200;
      const showEndText = scrollY > 200;

      setAnimateFrontText(showFrontText);
      setAnimateEndText(showEndText);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Myskill>
        {animateFrontText && <FrontText>FRONT</FrontText>}
        <KnockImage />
        {animateEndText && <EndText>END</EndText>}
        <IphoneImage />
      </Myskill>
    </div>
  );
}

export default Secondpage;
