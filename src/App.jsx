import React, { Component } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../src/pages/Home";
import Graph from "../src/components/Graph";
import MainStockSummary from "../src/components/MainStockSummary";
import MainTweets from "../src/components/MainTweets";
import StockInfo from "../src/pages/StockInfo";

function App() {
  const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
      <main>
        <Router>
            <Switch>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/stocks/:ticker' component={StockInfo}></Route>
            </Switch>
        </Router>
      </main>
      </QueryClientProvider>
    );
}
export default App;
