import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import styles from 'styled-components';
import MainStockSummary from '../components/MainStockSummary';
import MainTweets from '../components/MainTweets';
import SearchBar from '../components/SearchBar';

const StockInfo = () => {
    let { ticker } = useParams();
    return (
       <div>
           <SearchBar/>
           <MainStockSummary ticker={ticker}/>
           <MainTweets ticker={ticker}/>
       </div>   
    );
}

export default StockInfo;
