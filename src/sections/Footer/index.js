import React from "react";
import logo from "../../assets/react.svg";
import {
  Container,
  ContentContainer,
  CopyRight,
  Desc,
  IconContainer,
  IconStyle,
  LogoContainer,
  Title,
  TitleContainer,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      {/*<ContentContainer>*/}
      {/*  <LogoContainer>*/}
      {/*    <Title>*/}
      {/*      <img src={logo} height={50} width={50} alt="logo" />*/}
      {/*      Barcega*/}
      {/*    </Title>*/}
      {/*    <Desc>*/}
      {/*      Our agency is ready to serve interior design for your home or office*/}
      {/*    </Desc>*/}
      {/*  </LogoContainer>*/}
      {/*  <TitleContainer>*/}
      {/*    <Title>Our Service</Title>*/}
      {/*    <Desc>About</Desc>*/}
      {/*    <Desc>Service</Desc>*/}
      {/*    <Desc>Project</Desc>*/}
      {/*    <Desc>Contact</Desc>*/}
      {/*  </TitleContainer>*/}
      {/*  <TitleContainer>*/}
      {/*    <Title>Quick Link</Title>*/}
      {/*    <Desc>Documentation</Desc>*/}
      {/*    <Desc>FAQ</Desc>*/}
      {/*    <Desc>Blog</Desc>*/}
      {/*  </TitleContainer>*/}
      {/*  <TitleContainer>*/}
      {/*    <Title>Help</Title>*/}
      {/*    <Desc>Help Center</Desc>*/}
      {/*    <Desc>Tools</Desc>*/}
      {/*    <Desc>Product and service</Desc>*/}
      {/*  </TitleContainer>*/}
      {/*</ContentContainer>*/}
      <CopyRight>
        Copyright &copy; 2024 All rights reserved
      </CopyRight>
      <IconContainer>
        <IconStyle className="bi bi-telephone"></IconStyle>
        <IconStyle className="bi bi-whatsapp"></IconStyle>
        <IconStyle className="bi bi-instagram"></IconStyle>
        <IconStyle className="bi bi-at"></IconStyle>
      </IconContainer>
    </Container>
  );
};

export default Footer;