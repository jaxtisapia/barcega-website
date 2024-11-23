import React from "react";
import {Container, ContentContainer, Desc, Image, ImgContainer, InnerContainer, ReadBtn,} from "./styles";
import SofaPic from "../../assets/image2.jpg";

const Agency = () => {
  return (
    <Container>
      <ImgContainer>
        <Image src={SofaPic} alt="sofa" />
      </ImgContainer>
      <ContentContainer>
        <InnerContainer>
          {/*<Title>AGERIOR AGENCY</Title>*/}
          <Desc>
            At Barcega, we craft unique, sustainable homes that blend modern design with timeless comfort
          </Desc>
          <Desc>
            Thoughtful and refined, our properties are built to inspire and endure.
          </Desc>
          <ReadBtn>Discover More</ReadBtn>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};

export default Agency;
