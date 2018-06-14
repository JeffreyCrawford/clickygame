import React from 'react';
import Wrapper from "./components/Wrapper/";



import Guess from "./components/Guess/"
import './App.css';

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
