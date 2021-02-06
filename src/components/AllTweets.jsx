import React from 'react';
import styled from "styled-components";
import Tweets from "../components/Tweets";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
`;

const TweetContainer = styled.div`
    word-wrap: break-word;
    width: 30%;
    padding: 10px 10px;
    margin-right: 2%;
    display: inline-block;
    vertical-align: top;
    border-radius: 3%;
    border: 2px solid Gainsboro;
`;

const Title = styled.h1`
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    color: black;
    background-color: ${props => props.inputColor};
`;

const Label = styled.span`
    font-size: 1.25em;
    font-weight: bold;
    text-align: left;
    font: "Helvetica Neue";
    color: DimGrey;
`;

const Emphasize = styled.span`
    font-size: 1.25em;
    font-weight: bold;
    text-align: left;
    color: ${props => props.inputColor};
`;

const LabelTweet = ({ title, percent, pos, inputColor}) => {
  return (
      <span style={{textAlign: 'center'}}>
        <Title inputColor={inputColor}> {title}: {percent}%</Title>
        <Emphasize inputColor={inputColor}> {percent}% </Emphasize> <Label> of tweets are </Label> <Emphasize inputColor={inputColor}> {pos}</Emphasize>.
      </span>
  );
}

const tweetTest = "Most people don't tag their precise location in Tweets, so we're removing this ability to simplify your Tweeting experience. You'll still be able to tag your precise location in Tweets through our updated camera. It's helpful when sharing on-the-ground moments.";
const picURL = encodeURI("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*");
const tweetURL = encodeURI('https://twitter.com/TwitterSupport/status/1141039841993355264?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1141039841993355264%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fhelp.twitter.com%2Fen%2Fusing-twitter%2Fhow-to-embed-a-tweet');


const AllTweets = ({ percent1, percent2, percent3 }) => {
    return (
      <Container className="card">
        <span className="card-content">
          <TweetContainer>
            <LabelTweet title="BULLISH" percent={percent1} pos="POSITIVE" inputColor = "MediumSpringGreen"/>
            <Tweets imgURL={picURL} name = "Twitter Support" username = "TwitterSupport" tweet={tweetTest} date="1:47 PM @ Jun 18, 2019" url={tweetURL}/>
          </TweetContainer>
          <TweetContainer>
            <LabelTweet title="NEUTRAL" percent={percent2} pos="NEUTRAL" inputColor = "SlateGray"/>
          </TweetContainer>
          <TweetContainer>
            <LabelTweet title="BEARISH" percent={percent3} pos="NEGATIVE" inputColor = "LightCoral"/>
          </TweetContainer>
        </span>
      </Container>
    );
  };
  
  export default AllTweets;