import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin-top: 0px;
`;

const Heading = styled.div`
  font: Helvetica Neue;
  font-size: 43px;
  font-weight: bold;
  text-align: left;
  color: SeaGreen;
`;

const Subtitle = styled.h3`
    font-size: 1.5em;
    text-align: left;
    color: DimGrey;
`;

const AllInfo = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 30%;
`;

const OtherInfo = styled.h4`
    font-size: 1.5em;
    text-align: justify;
    color: DimGrey;
`;

const Label = styled.h6`
    font-size: 1.25em;
    font-weight: bold;
    text-align: left;
    color: Black;
    padding-top: 2%;
    padding-bottom: 2%;
`;

const Description = styled.h6`
    font-size: 1.25em;
    font-weight: bold;
    text-align: left;
    color: DimGrey;
    padding-top: 2%;
    padding-bottom: 2px;
    word-wrap: break-word;
    width: 50%;
`;

const Summary = ( {ticker, name, sector, industry, high, low, peratio, open, vol, mktcap, description}) => {
  return (
    <Container>
            <Heading>{ticker}</Heading>
            <Subtitle>{name}</Subtitle>
            <OtherInfo>SECTOR: {sector}</OtherInfo>
            <OtherInfo>INDUSTRY: {industry}</OtherInfo>
        <AllInfo>
            <Label>HIGH PRICE: ${high}</Label>
            <Label>LOW PRICE: ${low}</Label>
            <Label>OPEN PRICE: ${open}</Label>
        </AllInfo>
        <AllInfo>
            <Label>VOLUME: ${vol}</Label>
            <Label>MARKET CAP: ${mktcap}</Label>
            <Label> P/E RATIO: {peratio}</Label>
        </AllInfo>
        <Description> DESCRIPTION: {description} </Description>
    </Container>
  );
};

export default Summary;