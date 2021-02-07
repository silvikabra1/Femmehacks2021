import React, { useEffect, useState } from 'react';
import {  useQuery } from 'react-query'
import Plot from 'react-plotly.js';
import axios from 'axios';

  const Graph = ({ ticker })  => {
    var stockChartXValues = [];
    var stockChartYValues = [];
    const API_KEY = "7UBTJC1LFGRYGRFG";
    console.log(ticker);
    var StockSymbol = ticker;
    const queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + StockSymbol + "&outputsize=compact&apikey=" + API_KEY;
   
    const fetchStockData = useQuery('fetchStockData', () => axios(queryURL));

    const StockMarketGraph = (res) => {
        const { data } = res;
        console.log(data);
        if (typeof data === 'undefined') {
            return (
                <div>Hang on..</div>
            );
        }
        for (var key in data['Time Series (Daily)']) {
            console.log(key);
            console.log(data['Time Series (Daily)'][key]['1. open']);
            stockChartXValues.push(key);
            stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
        }
        return (
            <div>
                <Plot
                  data={[
                      {
                          x: stockChartXValues,
                          y: stockChartYValues,
                          type: 'scatter',
                          mode: 'lines+markers',
                          marker: {color: 'SeaGreen'},
                      }
                  ]}
                  layout={{
                      autosize: true,
                      font: {
                        family: "Helvetica Neue",
                        size: 20,
                        color: "SeaGreen"
                      },
                      margin: {
                          t: 60,
                          b: 50,
                          l: 80,
                          r: 0
                      }
                    
                }}
                config={{
                    responsive: true
                }}


              />
            </div>
        )
    }

    setInterval(fetchStockData, 30000);
    return(
        <div>
            {fetchStockData.error && <div>Something went wrong!</div>}
            {fetchStockData.isLoading && <div>Loading...</div>}
            {fetchStockData.data && StockMarketGraph(fetchStockData.data)}

        </div>
    )

   
   
}


  export default Graph;

