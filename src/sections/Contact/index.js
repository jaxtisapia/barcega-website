import React from "react";
import {Container, ContentContainer, Desc, MapImg, Title,} from "./styles";
import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <Container id="contact-us">
      <MapImg src={Map} alt="map" />
      <ContentContainer>
        <Title>Contact Us</Title>
        <Desc>
          Our Office is located in No. 2 4th St E, North Legon (a minute away from the Univeristy of Ghana, TF entrance)
        </Desc>

        <Desc>
          Call us on +233-55-826-8906
        </Desc>

        <Desc>
          Email us info@barcega.com
        </Desc>

        {/*<div className="mt-4">*/}
        {/*  <InputStyle placeholder="Type your email" />*/}
        {/*  <SendBtn>Send</SendBtn>*/}
        {/*</div>*/}
      </ContentContainer>
    </Container>
  );
};

export default Contact;
