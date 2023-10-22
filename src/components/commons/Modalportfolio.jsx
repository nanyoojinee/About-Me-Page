import React, { useState } from "react";
import styled from "styled-components";
import Mario from "../photo/mariogif.gif";

const WholeBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 모달을 고정 위치로 표시 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #699bf7; /* 회색 투명 배경 */
`;
const ModalBackground = styled.div`
  width: 35%;
  height: 65vh;
  background-color: rgb(23, 23, 253); /* 파란색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  background-color: #ccc; /* 회색 네모 */
  width: 100%;
  height: 50vh;
  margin-bottom: -2rem;
  max-width: 400px;
  padding: 20px;
  text-align: center;
  border-radius: 3px;
`;

const ModalText = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 30px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  border-color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 135px;
  right: 435px;
  cursor: pointer;
`;

const MarioImage = styled.div`
  background-image: url(${Mario});
  background-size: cover;
  border-radius: 0.2rem;
  width: 25rem;
  height: 14rem;
  position: absolute;
  z-index: 0;
`;

function ModalPort({ exOpenModal, skillOpenModal, closeModal }) {
  const handleSkillModal = () => {
    closeModal();
    skillOpenModal();
  };
  const handleExModal = () => {
    closeModal();
    exOpenModal();
  };
  return (
    <WholeBack>
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={closeModal}>x</CloseButton>
          <ModalText>What do you want to know?</ModalText>
          <MarioImage />
          <ButtonContainer>
            <Button onClick={handleSkillModal}>SKILLS</Button>
            <Button onClick={handleExModal}>EXPERIENCE</Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </WholeBack>
  );
}

export default ModalPort;
