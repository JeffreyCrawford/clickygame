import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/";
import Title from "./components/Title/";

import CharacterList from "./components/CharacterList/"
import characters from "./characters.json";
import Guess from "./components/Guess/"
import './App.css';
import Navbar from './components/Navbar/';
import Jumbotron from './components/Jumbotron/';



const App = () => (
  
  <div>
    
    <Jumbotron />
 
    <Wrapper>
      <Guess />
    </Wrapper> 
  </div>


);

export default App;
