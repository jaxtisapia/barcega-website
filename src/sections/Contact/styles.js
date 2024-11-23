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
  background-color: #fff;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 980px) {
    display: block;
  }
  @media (max-width: 980px) {
    padding: 50px 5%;
  }
  @media (max-width: 500px) {
    padding: 50px 1%;
  }
`;

export const MapImg = styled.img`
  width:50%;
  border-radius: 10% 40% 10% 0%;
  padding: 40px;
  
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px 20px 60px;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 20px 10px 20px 30px;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #414141;
  text-transform: uppercase;
  @media (max-width: 980px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;


export const Desc = styled.p`
  padding-right: 134px;
  font-size: 16px;
  color: #767878;
  font-weight: 400;
  margin-top: 25px;
  
  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputStyle = styled.input`
  border: 0px solid;
  padding: 20px;
  width: 50%;
  @media (max-width: 1024px) {
    width: 65%;
  }
`;

export const SendBtn = styled.button`
  background: #3d5b5c;
  border: none;
  color: white;
  padding: 20px 40px;
  font-weight: 600;
`;
