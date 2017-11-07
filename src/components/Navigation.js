import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Tab = styled(NavLink)`
  width: 190px;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${props => (props.active ? '#ffa584' : '#D3D3D3')};
  border: 1px solid black;
  text-decoration: none;
`;

const Wrapper = styled.div`
  margin-top: 15px;
  padding: 0 10px;
`;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    };
  }

  render() {
    return (
      <Wrapper>
        {this.props.tabs.map(tab => (
          <Tab exact={true} to={tab.path} key={tab.id} active={this.state.activeTab === tab.id} onClick={() => this.setState({activeTab: tab.id})}>
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

export default connect(mapStateToProps)(Navigation)
