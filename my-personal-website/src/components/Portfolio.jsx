import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./commons/Modalportfolio";
import Skill from "./portfolio/Skill";
import Experience from "./portfolio/Experience";

const WholeBack = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  height: 100vh;
  background-color: #699bf7;
`;

function PortfolioModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isExModalOpen, setIsExModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const exOpenModal = () => {
    setIsExModalOpen((prevModal) => !prevModal);
    setIsSkillModalOpen(false); // 경험 섹션을 열면 스킬 섹션 닫기
  };
  const skillOpenModal = () => {
    setIsSkillModalOpen((prevModal) => !prevModal);
    setIsExModalOpen(false); // 스킬 섹션을 열면 경험 섹션 닫기
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          skillOpenModal={skillOpenModal}
          exOpenModal={exOpenModal}
        />
      )}
      {!isModalOpen && (
        <WholeBack>
          {!isExModalOpen && <Skill skillOpenModal={skillOpenModal} />}
          {!isSkillModalOpen && <Experience exOpenModal={exOpenModal} />}
        </WholeBack>
      )}
    </>
  );
}

export default PortfolioModal;
