import React, { Component } from 'react';
import './App.css';
import Header from "./components/layout/Header";
import OutputValue from "./components/layout/OutputValue";
import ButtonsHolder from "./components/calculate/ButtonsHolder";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Header/>
        <div className="container calculatorBody">
        <OutputValue/>
        <ButtonsHolder/>
        </div>
        
      </Provider>
    );
  }
}

export default App;
