import React from 'react';
import Jumbotron from './components/Jumbotron/';
import Wrapper from "./components/Wrapper/";
import Guess from "./components/Guess/"
import './App.css';


const App = () => (
  
  <div>
    <Jumbotron />
    <Wrapper>
      <Guess />
    </Wrapper> 
  </div>

);

export default App;
