import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList/"
import characters from "./characters.json";

import './App.css';

const App = () => (
  
   <Wrapper>
    <Title>Character List</Title>
    <CharacterList characters={characters} />
  </Wrapper> 



);

export default App;
