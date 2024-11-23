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
            <img src={"https://www.svgrepo.com/show/265950/real-estate-windows.svg"} height={30} width={30} alt="logo" />
            <Title>Barcéga</Title>
          </NavBarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavBarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Item href="/" active>
                HOME
              </Item>
              <Item href="/#contact-us">ABOUT US</Item>
              <Item href="/projects">PROJECTS</Item>
              <Item href="/#contact-us">CONTACT</Item>
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
            <IconStyle className="bi bi-telephone"></IconStyle>
            <IconStyle className="bi bi-whatsapp"></IconStyle>
            <IconStyle className="bi bi-instagram"></IconStyle>
            <IconStyle className="bi bi-at"></IconStyle>
          </IconContainer>
        </LeftSide>
        <RightSide>
          <RightImg src={home} alt="home" />
          <RightImgOne src={homeOne} alt="home one" />
        </RightSide>
      </ContainerOne>
      <div className="my-5">
        <LftTitle>Sophisticated Simplicity,</LftTitle>
        <LftTitle>Sustainably Crafted Homes</LftTitle>
        <LftDesc>
          We design, build, and sell unique homes, offering exclusive real estate tailored to your lifestyle
        </LftDesc>
        <AbtBtn>Our Projects</AbtBtn>
      </div>
    </>
  );
};

export default Header;
