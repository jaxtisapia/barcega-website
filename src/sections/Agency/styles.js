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
  width: 100%;
  margin-bottom: 50px;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ImgContainer = styled.div`
  width: 55%;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
`;
export const ContentContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 768px) {
    width: 55%;
    margin-left: auto;
  }
  @media (max-width: 596px) {
    width: 70%;
    margin-left: auto;
  }
  @media (max-width: 468px) {
    width: 80%;
    margin-left: auto;
  }
  @media (max-width: 420px) {
    width: 90%;
    margin-left: auto;
  }
`;

export const InnerContainer = styled.div`
  background: #ecefef;
  padding: 70px 100px;
  width: 100%;
  margin-left: -190px;
  @media (max-width: 1445px) {
    padding: 50px 80px;
  }
  @media (max-width: 1345px) {
    padding: 40px 60px;
  }
  @media (max-width: 888px) {
    padding: 30px 50px;
  }
  @media (max-width: 768px) {
    margin-top: -80px;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #303030;
  font-family: sans-serif;
  @media (max-width: 1345px) {
    font-size: 40px;
  }
  @media (max-width: 1080px) {
    font-size: 30px;
  }
  @media (max-width: 888px) {
    font-size: 25px;
  }
`;

export const Desc = styled.h1`
  font-size: 25px;
  color: #767878;
  font-weight: 400;
  @media (max-width: 1345px) {
    font-size: 20px;
  }
  @media (max-width: 1080px) {
    font-size: 16px;
  }
  @media (max-width: 888px) {
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
  @media (max-width: 1080px) {
    padding: 5px 20px;
  }
  @media (max-width: 888px) {
    padding: 5px 20px;
  }
`;
