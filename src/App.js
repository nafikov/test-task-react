import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Content />
        <Switch>
          {/*<Route exact path='/departments' component={Departments} />*/}
          {/*<Route exact path='/employees' component={Employees} />*/}
          {/*/!*<Route exact path='/' component={Navigation} />*!/*/}
          {/*/!*<Route path='/employees/:id'  render={() => (*!/*/}
          {/*/!*this.props.activeEmployee ? (<EmployeeEditor/>) : (<Redirect to="/"/>)*!/*/}
          {/*/!*)} />*!/*/}
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
