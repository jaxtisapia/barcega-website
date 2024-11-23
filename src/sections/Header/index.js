import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/react.svg";
import home from "../../assets/image.jpg";
import homeOne from "../../assets/imge1.jpg";
import {
  AboutBtn,
  AbtBtn,
  Container,
  ContainerOne,
  IconContainer,
  IconStyle,
  Item,
  LeftDesc,
  LeftSide,
  LeftTitle,
  LftDesc,
  LftTitle,
  NavBarBrand,
  NavBarCollapse,
  RightImg,
  RightImgOne,
  RightSide,
  Title,
} from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <NavBarBrand href="#home">
            <img src={logo} height={50} width={50} alt="logo" />
            <Title>AGERIOR</Title>
          </NavBarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavBarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Item href="/" active>
                HOME
              </Item>
              <Item href="/about">ABOUT US</Item>
              <Item href="/projects">PROJECTS</Item>
              <Item href="/contact-us">CONTACT</Item>
            </Nav>
          </NavBarCollapse>
        </Navbar>
      </Container>
      <ContainerOne>
        <LeftSide>
          <div>
            <LeftTitle>Sophisticated Simplicity,</LeftTitle>
            <LeftTitle>Sustainably Crafted Homes</LeftTitle>

            <LeftDesc>
              We design, build, and sell unique homes, offering exclusive real estate tailored to your lifestyle
            </LeftDesc>

            <AboutBtn>Our Projects</AboutBtn>
          </div>
          <IconContainer>
            <IconStyle className="bi bi-slack"></IconStyle>
            <IconStyle className="bi bi-facebook"></IconStyle>
            <IconStyle className="bi bi-whatsapp"></IconStyle>
            <IconStyle className="bi bi-pinterest"></IconStyle>
          </IconContainer>
        </LeftSide>
        <RightSide>
          <RightImg src={home} alt="home" />
          <RightImgOne src={homeOne} alt="home one" />
        </RightSide>
      </ContainerOne>
      <div className="my-5">
        <LftTitle>DISCOVER LUXURY</LftTitle>
        <LftTitle>INTERIOR DESIGN</LftTitle>
        <LftDesc>
          We serve all types of interior design for both your private home and
          your company
        </LftDesc>
        <AbtBtn>About Us</AbtBtn>
      </div>
    </>
  );
};

export default Header;
