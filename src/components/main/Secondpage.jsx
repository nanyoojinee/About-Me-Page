import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import iphone from "../photo/iphone.png";
import Knock from "../photo/knock.gif";
import { useNavigate } from "react-router-dom";
// 슬라이드 인 애니메이션 키프레임 정의
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

function Secondpage() {
  const [animateFrontText, setAnimateFrontText] = useState(false);
  const [animateEndText, setAnimateEndText] = useState(false);

  const navigate = useNavigate();

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

  const clickNavigate = () => {
    navigate("/portfolio");
  };
  return (
    <div>
      <Myskill>
        {animateFrontText && (
          <FrontText onClick={clickNavigate}>FRONT</FrontText>
        )}
        <KnockImage onClick={clickNavigate} />
        {animateEndText && <EndText onClick={clickNavigate}>END</EndText>}
        <IphoneImage />
      </Myskill>
    </div>
  );
}

export default Secondpage;

const Myskill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FrontText = styled.div`
  position: absolute;
  left: 6%;
  z-index: 2;
  font-size: 8rem;
  color: #d1d1d1;

  animation: ${slideInFromRight} 1s ease;
`;

const KnockImage = styled.div`
  background-image: url(${Knock});
  background-size: cover;
  border-radius: 2rem;
  width: 19rem;
  height: 39rem;
  position: absolute;
  z-index: 0;
`;

const IphoneImage = styled.div`
  background-image: url(${iphone});
  background-size: cover;
  width: 20rem;
  border-radius: 3rem;
  height: 91vh;
  position: absolute;
  z-index: 1;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const EndText = styled.div`
  position: absolute;
  right: 13%;
  z-index: 2;
  font-size: 8rem;
  color: #d1d1d1;

  animation: ${slideInFromRight} 1s ease;
`;
