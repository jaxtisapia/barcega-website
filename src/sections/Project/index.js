import React from "react";
import {
  Container,
  ContentContainer,
  Desc,
  Img,
  ImgContainer,
  InnerContainer,
  ReadBtn,
  Span,
  SubTitle,
  Title,
} from "./styles";
import Interior from "../../assets/interior.jpg";
import Interior1 from "../../assets/interior1.jpg";
import Interior2 from "../../assets/interior2.jpg";
import Interior3 from "../../assets/interior3.jpg";

const Project = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Project: Roz Bonilla</Title>
        <SubTitle>North Legon</SubTitle>
        <Desc>
          This is our latest project, located in the prime residential area of North Legon, just a minute away from the University of Ghana, Legon.
        </Desc>

        <Desc>
          Known for its rich heritage, North Legon has been home to Ghana’s elite since post-independence, including lawyers, diplomats, and prominent figures. It also boasts a vibrant atmosphere with a youthful student community.
        </Desc>

        <Desc>
          Designed with a minimalist and modern aesthetic, the residence features sleek interiors with a refined gray palette, evoking elegance and simplicity in every detail.
        </Desc>
        <ReadBtn>Contact Sales Team</ReadBtn>
      </ContentContainer>
      <ImgContainer>
        <div>
          <Img src={Interior} />
        </div>
        <InnerContainer>
          <Img src={Interior2} />
        </InnerContainer>
        <div>
          <Img src={Interior1} />
        </div>
        <InnerContainer>
          <Img src={Interior3} />
        </InnerContainer>
      </ImgContainer>
    </Container>
  );
};

export default Project;
