import React from 'react';
import styles from 'styled-components';
import MainStockSummary from '../components/MainStockSummary';
import MainTweets from '../components/MainTweets';

const StockInfo = () => {
    return (
       <div>
           <MainStockSummary/>
           <MainTweets/>
       </div>   
    );
}

export default StockInfo;
