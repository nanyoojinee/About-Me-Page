import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import mac from "../photo/mac.png";
// import Knock from "../photo/knock.gif";

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

function Thirdpage() {
  const [animateFrontText, setAnimateFrontText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showFrontText = scrollY > 600;

      setAnimateFrontText(showFrontText);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Myskill>
        {animateFrontText && <FrontText>DATA</FrontText>}
        {/* <KnockImage /> */}
        <MacImage />
      </Myskill>
    </div>
  );
}

export default Thirdpage;

const Myskill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FrontText = styled.div`
  position: absolute;
  color: #d1d1d1;

  left: 6%;
  z-index: 2;
  font-size: 8rem;
  animation: ${slideInFromRight} 1s ease;
`;

// const KnockImage = styled.div`
//   background-image: url(${Knock});
//   background-size: cover;
//   border-radius: 2rem;
//   width: 17rem;
//   height: 33rem;
//   position: absolute;
//   z-index: 0;
// `;

const MacImage = styled.div`
  background-image: url(${mac});
  background-size: cover;
  width: 60rem;
  border-radius: 3rem;
  height: 80vh;
  position: absolute;
  z-index: 1;
  right: 1rem;
`;
