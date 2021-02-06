import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: LightGoldenRodYellow;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const Label = styled.div`
  font-size: 1.25em;
  color: LightSlateGrey;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Logo></Logo>
    <Label>Made by Bethany Hsiao, Silvi Kabra, Claire Wang, Maggie Yu</Label>
  </Container>
)

export default Home;