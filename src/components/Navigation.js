import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Tab = styled(NavLink)`
  width: 190px;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #D3D3D3;
  border: 1px solid black;
  text-decoration: none;
  
  &:hover {
    background-color: #a9a9a9;
  }
  &.active {
    background-color: #00bfff;
  }
`;

const Wrapper = styled.div`
  margin-top: 15px;
  padding: 0 10px;
`;

class Navigation extends Component {

  render() {
    return (
      <Wrapper>
        {this.props.tabs.map(tab => (
          <Tab to={tab.path} key={tab.id} activeClassName='active'>
            {tab.name}
          </Tab>
        ))}
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))
