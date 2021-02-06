import React from 'react';
import styled from "styled-components";
import Summary from '../components/Summary';
import Graph from '../components/Graph';
import Tweets from '../components/Tweets';


const OuterContainer = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5%;
`;
const StockInfoContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  height: 38%;
  padding-top: 5%;
  flex-direction: column;
`;

const GraphContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 50%;
    height: 38%;
    padding-top: 0px;
    flex-direction: column;
`;

// <Tweets imgURL={picURL} name = "Twitter Support" username = "TwitterSupport" tweet={tweetTest} date="1:47 PM @ Jun 18, 2019" url={tweetURL}/>

const MainStockSummary = () => {
    const tickerName = "GME";
   return(
        <div>
            <OuterContainer>
                <StockInfoContainer>
                    <Summary ticker={tickerName} name="Gamestop" sector='Gaming' industry='Gaming' high={1.35} low = {0.35} peratio={1.00} open={3.00} vol={1.5} mktcap={20} description="Buy games here"/>
                </StockInfoContainer>
                <GraphContainer>
                    <Graph ticker={tickerName} />
                </GraphContainer>
            </OuterContainer>
        </div>
    )
}

export default MainStockSummary;