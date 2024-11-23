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
  margin-bottom: 50px;
  padding: 80px 10%;
  animation: ${fadeIn} 1.2s ease-in-out;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-size: 50px;
  color: #ffff;
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 30px;
`;
export const Items = styled.div`
  width: 25%;
  text-align: center;
  padding: 30px;
  padding-top: 0;
  @media (max-width: 1250px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const IconStyle = styled.i`
  color: white;
  font-size: 50px;
`;
export const ItemTitle = styled.h1`
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 12px;
  white-space: nowrap;
`;

export const ItemDesc = styled.h1`
  font-size: 20px;
  color: #879999;
  font-weight: 300;
  margin-top: 12px;
  padding: 0px 50px;
  @media (max-width: 1500px) {
    padding: 0px 30px;
  }
  @media (max-width: 1250px) {
    padding: 0px 104px;
  }
  @media (max-width: 1100px) {
    padding: 0px 80px;
  }
  @media (max-width: 1250px) {
    padding: 0px 60px;
  }
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
  @media (max-width: 650px) {
    padding: 0px 60px;
  }
  @media (max-width: 450px) {
    padding: 0px 40px;
  }
  @media (max-width: 390px) {
    padding: 0px 0px;
  }
`;
