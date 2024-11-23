import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); /* Optional for subtle motion */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background: #3d5b5c;
  margin: 11% 10% 100px 10%;
  padding: 0px 10%;
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 1642px) {
    margin-top: 15%;
    padding: 0px 5%;
  }
  @media (max-width: 1400px) {
    padding: 0px 3%;
  }
  @media (max-width: 1332px) {
    margin: 15% 0 100px 0;
    padding: 0px 5%;
  }
  @media (max-width: 1169px) {
    padding: 0px 3%;
  }
  @media (max-width: 930px) {
    display: block;
    margin-top: 25%;
  }
`;

export const DiscountImg = styled.img`
  width: 550px;
  height: auto;
  margin-top: -30%;
  @media (max-width: 1100px) {
    width: 470px;
  }
  @media (max-width: 930px) {
    margin-top: -17%;
    margin-left: 125px;
  }
  @media (max-width: 620px) {
    width: 400px;
    margin-top: -19%;
    margin-left: 0px;
  }
  @media (max-width: 415px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 400;
  @media (max-width: 988px) {
    font-size: 40px;
  }
  @media (max-width: 930px) {
    text-align: center;
  }
  @media (max-width: 613px) {
    text-align: left;
    padding-left: 25px;
  }
  @media (max-width: 415px) {
    paading-left: 5px;
  }
`;

export const Desc = styled.h1`
  font-size: 25px;
  color: #c7cfd0;
  font-weight: 400;
  @media (max-width: 988px) {
    font-size: 17px;
  }
  @media (max-width: 930px) {
    text-align: center;
  }
  @media (max-width: 613px) {
    text-align: left;
    padding-left: 25px;
  }
  @media (max-width: 415px) {
    padding-left: 5px;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  @media (max-width: 984px) {
    width: 100%;
  }
  @media (max-width: 930px) {
    text-align: center;
  }
`;
export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 984px) {
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 55px;
  @media (max-width: 984px) {
    justify-content: center;
  }
  @media (max-width: 613px) {
    justify-content: start;
    margin-top: 35px;
    margin-left: 25px;
  }
  @media (max-width: 415px) {
    margin-left: 5px;
  }
`;

export const AppleStoreStyle = styled.img`
  height: 60px;
  @media (max-width: 415px) {
    height: 50px;
  }
`;

export const PlayStoreStyle = styled.img`
  height: 67px;
  @media (max-width: 415px) {
    height: 57px;
  }
`;
