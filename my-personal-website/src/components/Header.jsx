import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <a href="/">Welcome to Yujin's space</a>
      </Logo>
      <Navigation>
        <ul>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  color: white;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed; /* 헤더를 화면 상단에 고정 */
  width: 99%; /* 전체 너비를 차지하도록 설정 */
  top: 0; /* 화면 상단에 배치 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    color: white;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #d4d498;
    }
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
    margin-top: -0.7rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: lightblue;
    }
  }
`;
