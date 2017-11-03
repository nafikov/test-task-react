import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import AddItem from './components/AddItem';
import Content from './components/Content';
import './App.css';

const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <AddItem />
        <Navigation />
        <Route exact path='/tabs/:id' component={Content} />
      </Wrapper>
    );
  }
}

export default App;
