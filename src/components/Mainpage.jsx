import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Firstpage from "./main/Firstpage.jsx";
import Secondpage from "./main/Secondpage.jsx";
import Thirdpage from "./main/Thirdpage.jsx";
import Fourthpage from "./main/Fourthpage.jsx";

function Mainpage() {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지를 추적

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 페이지 위치에 따라 현재 페이지 설정
    if (scrollY < windowHeight) {
      setCurrentPage(0);
    } else if (scrollY < 2 * windowHeight) {
      setCurrentPage(1);
    } else if (scrollY < 3 * windowHeight) {
      setCurrentPage(2);
    } else {
      setCurrentPage(3);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <WholePage>
        <Firstpage isVisible={currentPage === 0} />
        <Secondpage isVisible={currentPage === 1} />
        <Thirdpage isVisible={currentPage === 2} />
        <Fourthpage isVisible={currentPage === 3} />
      </WholePage>
    </div>
  );
}

export default Mainpage;

const WholePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  background-color: #000000;
`;
