import React from "react";
import {
  Container,
  ContentContainer,
  Desc,
  InputStyle,
  MapImg,
  SendBtn,
  Title,
} from "./styles";
import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <Container>
      <MapImg src={Map} alt="map" />
      <ContentContainer>
        <Title>Contact Us</Title>
        <Desc>
          Our Office is located in 4517 Washington Ave. Manchester, Kentucky
          39495
        </Desc>
        <div className="mt-4">
          <InputStyle placeholder="Type your email" />
          <SendBtn>Send</SendBtn>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
