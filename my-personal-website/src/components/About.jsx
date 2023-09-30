import React from "react";
import styled from "styled-components";
import yujinjapan from "./photo/yujinjapan.mp4";
import tape1 from "./photo/tape1.png";
import tape2 from "./photo/tape2.png";
import tape3 from "./photo/tape3.png";

const WholeBack = styled.div`
  background-color: #abc5d8;
  width: 100%;
  height: 200vh;
  padding-top: 10rem;
  display: flex;
  flex-direction: row; /* 요소들을 가로로 배치합니다. */
  align-items: flex-start; /* 위쪽 정렬 */
`;

const VideoContainer = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 5rem;
`;

const Video = styled.video`
  width: 100%;
  max-width: 100%; /* 비디오를 컨테이너에 맞게 확대 */
  height: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const RightPage = styled.div`
  width: 35%;
  padding: 4rem 4rem;
  background-color: #f2f0f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-left: 3rem;
  height: 45vh;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const TapeImage = styled.img`
  width: 10rem;
  height: auto;
  position: absolute;
  transform: rotate(45deg);
  /* 각 모서리에 따라 위치 조정 */
  &.top-left {
    top: -4rem;
    left: -5rem;
    transform: rotate(-45deg);
  }

  &.top-right {
    top: -6rem;
    right: -6rem;
  }

  &.bottom-left {
    bottom: -3.5rem;
    left: -2rem;
    transform: rotate(45deg);
  }

  &.bottom-right {
    bottom: -4rem;
    right: -4rem;
    transform: rotate(-45deg);
  }
`;

function About() {
  return (
    <WholeBack>
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src={yujinjapan} type="video/mp4" />
          브라우저가 HTML5 비디오를 지원하지 않을 때 표시되는 메시지
        </Video>
        {/* 테이프 이미지를 각 모서리에 추가 */}
        <TapeImage className="top-left" src={tape1} alt="Tape" />
        <TapeImage className="top-right" src={tape2} alt="Tape" />
        <TapeImage className="bottom-left" src={tape3} alt="Tape" />
        <TapeImage className="bottom-right" src={tape1} alt="Tape" />
      </VideoContainer>
      <RightPage></RightPage>
    </WholeBack>
  );
}

export default About;
