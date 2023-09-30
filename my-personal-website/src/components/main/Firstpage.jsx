import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import yujinImage from "../photo/yujin4.png";
import yujinImage2 from "../photo/yujin3.png";
import { useNavigate } from "react-router-dom";

function Firstpage() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // 3초 후에 텍스트 애니메이션 시작
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 2000);

    // 4초 후에 이미지를 표시하고 이미지 애니메이션 시작
    const imageTimeout = setTimeout(() => {
      setAnimateImage(true);
    }, 2500);

    return () => {
      clearTimeout(textAnimationTimeout);
      clearTimeout(imageTimeout);
    };
  }, []);

  const clickNavigate = () => {
    navigate("/about");
  };
  return (
    <Introbox>
      <Myintro>
        <IntroText animateText={animateText} onClick={clickNavigate}>
          안 녕 하 세 요, <br />
          <br />정 유 진 입 니 다.
        </IntroText>
        {animateImage && <IntroImage />}
      </Myintro>
    </Introbox>
  );
}

export default Firstpage;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutAndShrinkToLeft = keyframes`
  0% {
    transform: translateX(0);
    font-size: 7rem;
  }
  50% {
    transform: translateX(-100%);
    font-size: 4rem;
    margin-left: -10rem;
  }
  100% {
    transform: translateX(-100%);
    font-size: 4rem;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Introbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${slideInFromBottom} 1s ease;
`;

const Myintro = styled.div`
  display: flex;
  align-items: center;
`;

const IntroText = styled.div`
  font-size: 7rem;
  color: #d1d1d1;
  animation: ${(props) =>
      props.animateText ? slideOutAndShrinkToLeft : "none"}
    1s ease;
  animation-fill-mode: forwards;
`;

const IntroImage = styled.div`
  width: 25rem;
  height: 40rem;
  margin-bottom: -5rem;
  margin-right: -38rem;
  background-image: url(${(props) =>
    props.hovered ? yujinImage : yujinImage2});
  background-size: cover;
  /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); // 항상 그림자 추가 */
  animation: ${(props) => (props.animateImage ? slideInFromRight : "none")} 1s
    ease;
  transition: background-image 0.3s ease; // 호버 전환 효과를 위한 트랜지션 추가
  &:hover {
    background-image: url(${yujinImage}); // 호버 시 이미지 변경
  }
`;
