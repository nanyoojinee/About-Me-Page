import React from "react";
import styled from "styled-components";
import responsible from "../photo/responsible.jpg";
import challenge from "../photo/challenge.jpg";
import free from "../photo/free.jpg";
import passion from "../photo/passion.jpg";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;
const MyImg = styled.img``;
const ImageModal = ({ num, closeModal }) => {
  let imageUrl;

  if (num === 1) {
    imageUrl = challenge;
  } else if (num === 2) {
    imageUrl = free;
  } else if (num === 3) {
    imageUrl = passion;
  } else if (num === 4) {
    imageUrl = responsible;
  } else {
    imageUrl = responsible;
  }

  return (
    <ModalWrapper onClick={closeModal}>
      <ModalContent>
        <MyImg
          src={imageUrl}
          alt={`Image ${num}`}
          style={{ width: "40rem", height: "25rem" }}
        />
      </ModalContent>
    </ModalWrapper>
  );
};

export default ImageModal;
