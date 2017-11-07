import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import AddItem from './components/AddItem';
import Content from './components/Content';

const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
  background-color: #fffaf0;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <AddItem />
        <Navigation />
        <Switch>
            <Route exact path='/tabs/:id' component={Content} />
            <Redirect from="/" to="/tabs/1" />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
