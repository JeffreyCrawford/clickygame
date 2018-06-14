import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Wrapper>
    <Title>characters List</Title>
    <FriendCard
      name={characters[0].name}
      image={characters[0].image}
      occupation={characters[0].occupation}
      location={characters[0].location}
    />
    <FriendCard
      name={characters[1].name}
      image={characters[1].image}
      occupation={characters[1].occupation}
      location={characters[1].location}
    />
    <FriendCard
      name={characters[2].name}
      image={characters[2].image}
      occupation={characters[2].occupation}
      location={characters[2].location}
    />
  </Wrapper>
);

export default App;
