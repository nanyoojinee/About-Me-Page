import React, { useState } from "react";
import styled from "styled-components";
import selectstar from "../photo/selectstar.png";
import earth from "../photo/earth.png";
import knocklogo from "../photo/knocklogo.png";
const RightSection = styled.div`
  flex: 1;
  padding: 4rem 4rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  margin: 2rem 2rem;
  height: 70vh;
  background-color: #ffd500;
  position: relative; /* 상대 위치 지정 */
  border: 3px solid black; /* 검은색 보더 추가 */
  overflow: hidden; /* 자식 엘리먼트가 부모 밖으로 넘치지 않도록 합니다. */
  transition: transform 0.3s ease-in-out; /* transform 속성에 대한 애니메이션 효과 설정 */
  cursor: pointer;

  &:hover {
    transform: scale(1.05); /* 마우스 호버 시 크기를 1.05배로 확대 */
  }
`;
const Header = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black; /* 헤더 아래에 검은색 보더 추가 */
`;
const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  border: 3px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ImageContainer = styled.div`
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    transform: translateZ(10px);
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-around;
  img {
    width: 10rem;
    height: auto;
    overflow: hidden; /* 자식 엘리먼트가 부모 밖으로 넘치지 않도록 합니다. */
    transition: transform 0.3s ease-in-out; /* transform 속성에 대한 애니메이션 효과 설정 */
    cursor: pointer;

    &:hover {
      transform: scale(1.1); /* 마우스 호버 시 크기를 1.05배로 확대 */
    }
  }
`;

function Experience({ exOpenModal }) {
  const ClickToEarth = () => {
    window.open(
      "https://www.notion.so/592b34173cf446e798a54a1dd30e3232?pvs=4",
      "_blank"
    );
  };
  const ClickToKnock = () => {
    window.open(
      "https://www.notion.so/knock-knock-530add3f87f44f18a09bc98a7a2b6095?pvs=4",
      "_blank"
    );
  };
  const ClickToSelect = () => {
    window.open(
      "https://www.notion.so/35808547c0bb41e7941a581680596c90?pvs=4",
      "_blank"
    );
  };
  return (
    <RightSection onClick={exOpenModal}>
      <Header>
        {/* 헤더 영역에 노란색 동그라미와 하늘색 동그라미 추가 */}
        <CirclesContainer>
          <Circle color="yellow"></Circle>
          <Circle color="skyblue"></Circle>
        </CirclesContainer>
      </Header>
      <h1>Experience</h1>
      <ImageContainer>
        <h2>ProjectManager</h2>
        <ImgBox>
          <img
            src={selectstar}
            alt="Project"
            onClick={ClickToSelect}
            style={{
              width: "25rem",
              marginBottom: "3rem",
              marginTop: "2rem",
            }}
          />
        </ImgBox>
      </ImageContainer>
      <ImageContainer>
        <h2>FrontEnd</h2>
        <ImgBox>
          <img
            src={earth}
            alt="Front-end"
            onClick={ClickToEarth}
            style={{
              width: "15rem",
              maxWidth: "150px",
              height: "7rem",
              marginRight: "2rem",
            }}
          />
          <img
            src={knocklogo}
            alt="Front-end"
            onClick={ClickToKnock}
            style={{ width: "20rem", maxWidth: "250px", marginTop: "-4rem" }}
          />
        </ImgBox>
      </ImageContainer>
    </RightSection>
  );
}

export default Experience;
