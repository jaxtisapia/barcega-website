import React from "react";
import {
  Container,
  IconStyle,
  InnerContainer,
  ItemDesc,
  Items,
  ItemTitle,
  Title,
} from "./styles";

const Service = () => {
  return (
    <Container>
      <Title>Our Best Service</Title>
      <InnerContainer>
        <Items>
          <IconStyle className="bi bi-currency-exchange"></IconStyle>
          <ItemTitle>Friendly Price</ItemTitle>
          <ItemDesc>
            We can design the interior of your home at an affordable price
          </ItemDesc>
        </Items>
        <Items>
          <IconStyle className="bi bi-award-fill"></IconStyle>
          <ItemTitle>Great Quality</ItemTitle>
          <ItemDesc>
            The quality of the materials we use is of the best quality
          </ItemDesc>
        </Items>
        <Items>
          <IconStyle className="bi bi-stopwatch-fill"></IconStyle>
          <ItemTitle>Best Time</ItemTitle>
          <ItemDesc>
            We can work on the interior of your home in an efficient time
          </ItemDesc>
        </Items>
        <Items>
          <IconStyle className="bi bi-patch-check-fill"></IconStyle>
          <ItemTitle>Warranty</ItemTitle>
          <ItemDesc>We provide 1 month warranty after processing</ItemDesc>
        </Items>
      </InnerContainer>
    </Container>
  );
};

export default Service;
