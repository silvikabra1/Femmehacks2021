import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  word-wrap: break-word;
  width: 90%;
  border: 1px solid Gainsboro;
  border-radius: 5%;
`;

const Name = styled.h1`
  font-size: 1.75em;
  font-weight: bold;
  text-align: left;
  color: black;
`;

const Username = styled.h1`
  font-size: 1em;
  text-align: left;
  color: DimGrey;
  font-weight: bold;
`;

const Tweet = styled.h3`
    padding-top: 5px;
    font-size: 1.25em;
    font-family: Helvetica Neue;
    font-weight: bold;
    text-align: left;
    color: black;
`;

const Label = styled.h6`
    padding-top: 5px;
    font-size: 1em;
    font-family: Helvetica Neue;
    text-align: left;
    color: DimGrey;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
    float: left;
    &__text {
        display: inline;
    }
`;

const Tweets = ({ imgURL, name, username, tweet, date, url }) => {
  const atUsername = "@" + username;
  const clickableUrl = "location.href=" + decodeURI(url);
  return (
    <Container className="card">
      <span className="card-content">
        <ProfilePic src={decodeURI(imgURL)}></ProfilePic>
        <Name>{name}</Name>
        <Username>{atUsername}</Username>
      </span>
      <div>
        <Tweet>{tweet}</Tweet>
        <Label>{date}</Label>
      </div>
    </Container>
  );
};

export default Tweets;