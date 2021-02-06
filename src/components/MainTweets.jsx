import React from 'react';
import styled from "styled-components";
import AllTweets from '../components/AllTweets.jsx';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  word-wrap: break-word;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainTweets = () => {
    return(
        <Container>
            <AllTweets percent1={75} percent2={15} percent3={10} />
        </Container>
    )
}

export default MainTweets;