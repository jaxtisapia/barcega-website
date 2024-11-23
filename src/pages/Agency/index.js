import React from "react";
import {
  Container,
  ContentContainer,
  Desc,
  Image,
  ImgContainer,
  InnerContainer,
  ReadBtn,
  Title,
} from "./styles";
import SofaPic from "../../assets/image2.jpg";

const Agency = () => {
  return (
    <Container>
      <ImgContainer>
        <Image src={SofaPic} alt="sofa" />
      </ImgContainer>
      <ContentContainer>
        <InnerContainer>
          <Title>AGERIOR AGENCY</Title>
          <Desc>
            We are an agent engaged in interior design that provides interior
            design and renovation services for home or office.
          </Desc>
          <ReadBtn>Read More</ReadBtn>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};

export default Agency;
