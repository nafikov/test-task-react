import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const NavLink = styled(Link)`
  width: 200px;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #D3D3D3;
  border-bottom: 1px solid #fff;
`;

const Wrapper = styled.div`
  display: inline-block;
  //width: 200px;
  background-color: #fff;
`;

class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.tabs.map(tab => (
          <NavLink to={tab.path} key={tab.id} activeClassName="active">
            {tab.name}
          </NavLink>
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
