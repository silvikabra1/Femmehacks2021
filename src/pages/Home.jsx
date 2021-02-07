import React from 'react';
import styled from "styled-components";
import SearchBar from "../components/SearchBar";


const Container = styled.div`
  background-color: LightGoldenRodYellow;
  height: 100vh;
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
    <Logo src="../stocktweets_logo.png"></Logo>
    <SearchBar/>
    <Label>Made by Bethany Hsiao, Silvi Kabra, Claire Wang, Maggie Yu</Label>
  </Container>
)

export default Home;