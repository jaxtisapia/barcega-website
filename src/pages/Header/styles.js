import { Nav, Navbar } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); /* Optional for subtle motion */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #303030;
  margin-bottom: 0;
`;
export const Item = styled(Nav.Link)`
  font-size: 17px;
  font-weight: 500;
  padding-left: 15px !important;
  padding-right: 15px !important;
  color: #767878;
  &:active {
    color: #1d1e1e;
  }
`;

export const NavBarBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
`;

export const NavBarCollapse = styled(Navbar.Collapse)`
  background: transparent;
  @media (max-width: 991px) {
    background: #ecefef;
  }
`;

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10%;
  padding-right: 10%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 1000px) {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5%;
    padding-right: 5%;
  }
`;
export const ContainerOne = styled.div`
  display: flex;
  width: 100%;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

export const LeftSide = styled.div`
  width: 40%;
  padding-top: 200px;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 100px;
  @media (max-width: 1000px) {
    padding-bottom: 50px;
    padding-left: 5%;
  }
  @media (max-width: 768px) {
    visibility: hidden;
    padding-bottom: 50px;
  }
`;
export const RightSide = styled.div`
  width: 60%;
  background-color: #ecefef;
  padding-top: 150px;
  padding-bottom: 100px;
  @media (max-width: 1000px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
export const LeftTitle = styled.h1`
  padding-right: 20px;
  font-size: 80px;
  position: relative;
  color: #303030;
  background-color: white;
  z-index: 1;
  width: max-content;
  font-family: sans-serif;
  margin-bottom: 0;
  @media (max-width: 1440px) {
    font-size: 60px;
  }
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LftTitle = styled(LeftTitle)`
  display: none;
  padding-left: 50px;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 560px) {
    font-size: 40px;
  }
  @media (max-width: 455px) {
    font-size: 30px;
  }
`;

export const LeftDesc = styled.h1`
  padding-right: 134px;
  font-size: 25px;
  color: #767878;
  font-weight: 400;
  margin-top: 25px;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LftDesc = styled(LeftDesc)`
  display: none;
  padding-left: 50px;
  @media (max-width: 768px) {
    font-size: 25px;
    display: block;
  }
  @media (max-width: 560px) {
    font-size: 20px;
  }
  @media (max-width: 455px) {
    font-size: 15px;
  }
`;

export const AboutBtn = styled.button`
  background: black;
  border: none;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  @media (max-width: 1100px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const AbtBtn = styled(AboutBtn)`
  display: none;
  margin-left: 50px;
  @media (max-width: 768px) {
    font-size: 25px;
    display: block;
  }
  @media (max-width: 560px) {
    font-size: 20px;
  }
  @media (max-width: 455px) {
    font-size: 15px;
  }
`;

export const RightImg = styled.img`
  height: 650px;
  width: 100%;
  margin-left: -135px;
  @media (max-width: 1440px) {
    height: 550px;
  }
  @media (max-width: 1100px) {
    height: 450px;
  }
  @media (max-width: 768px) {
    margin-left: -50%;
    height: auto;
    width: 133%;
  }
`;

export const RightImgOne = styled.img`
  height: 350px;
  width: auto;
  float: inline-end;
  margin-top: -250px;
  @media (max-width: 1440px) {
    height: 250px;
    margin-top: -150px;
  }
  @media (max-width: 1100px) {
    height: 150px;
    margin-top: -80px;
  }
  @media (max-width: 764px) {
    height: 150px;
    margin-top: -100px;
  }
  @media (max-width: 425px) {
    height: 100px;
    margin-top: -60px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const IconStyle = styled.i`
  color: #3c5a5a;
  background: #ecefef;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  cursor: pointer;
`;
