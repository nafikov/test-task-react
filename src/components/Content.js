import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Wrapper = styled.div`
  //height: 100px;
  //display: flex;
  //justify-content: space-between;
  align-items: center;
  
  overflow-y: auto;
`;

const List = styled.ul`
  list-style-type: none;
  height: 200px;
`;

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          {this.props.entries.filter(e => e.tab === this.props.match.params.id)
            .map(e => (
            <li><label htmlFor=""><input type="checkbox"/>{e.name}</label></li>
          ))}
        </List>
        <button>Удалить</button>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

export default connect(mapStateToProps)(Content)