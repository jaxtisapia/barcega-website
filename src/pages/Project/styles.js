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
  display: flex;
  padding: 50px 10%;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 1630px) {
    padding: 50px 5%;
  }
  @media (max-width: 1400px) {
    padding: 50px 3%;
  }
  @media (max-width: 900px) {
    padding: 50px 8%;
    flex-direction: column-reverse;
  }
`;

export const ContentContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1350px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #414141;
  font-family: sans-serif;
  text-transform: uppercase;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    margin-top: 100px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 26px;
  color: #414141;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  @media (max-width: 1100px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    padding-bottom: 20px;
    font-size: 15px;
  }
`;

export const Span = styled.span`
  flex: 1;
  height: 1px;
  background-color: #000;
  margin-left: 10px;
  @media (max-width: 980px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Desc = styled.h1`
  font-size: 25px;
  color: #b8b8b8;
  width: 80%;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    font-size: 17px;
  }
  @media (max-width: 980px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const ReadBtn = styled.button`
  background: black;
  border: none;
  color: white;
  padding: 10px 30px;
  margin-top: 20px;
  font-weight: 600;
  width: max-content;
  @media (max-width: 1080px) {
    padding: 5px 20px;
  }
  @media (max-width: 888px) {
    padding: 5px 20px;
  }
  @media (max-width: 650px) {
    padding: 4px 17px;
  }
`;

export const ImgContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 50px;
  @media (max-width: 1350px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  margin-top: 66px;
  margin-bottom: -66px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  min-height: 390px;
  object-fit: cover;
  @media (max-width: 1100px) {
    min-height: 290px;
  }
  @media (max-width: 650px) {
    min-height: 200px;
  }
  @media (max-width: 650px) {
    min-height: 150px;
  }
`;
