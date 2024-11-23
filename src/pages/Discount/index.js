import React from "react";
import {
  AppleStoreStyle,
  Container,
  ContentContainer,
  Desc,
  DiscountImg,
  ImgContainer,
  InnerContainer,
  PlayStoreStyle,
  Title,
} from "./styles";
import Image from "../../assets/discount.png";
import PlayStore from "../../assets/playStore.png";
import AppleStore from "../../assets/appleStore.png";

const Discount = () => {
  return (
    <Container>
      <ImgContainer>
        <DiscountImg src={Image} alt="discount" />
      </ImgContainer>
      <ContentContainer className="py-4">
        <Title>Get voucher</Title>
        <Title>discount up to 50%</Title>
        <Desc>Put your email address and get started</Desc>
        <InnerContainer>
          <AppleStoreStyle src={AppleStore} alt="apple store" />
          <PlayStoreStyle src={PlayStore} alt="play store" />
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};

export default Discount;
