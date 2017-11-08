import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BtnError } from './../commons/Button';

const Wrapper = styled.div`
  align-items: center;
  overflow-y: auto;
`;

const List = styled.ul`
  margin-bottom: 0;
  list-style-type: none;
  height: 200px;
  overflow-x: auto;
  border-bottom: 2px solid #d3d3d3;
  box-sizing: border-box;
`;

const Button = BtnError.extend`
  float: right;
  margin: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
  vertical-align: middle;
`;

class Content extends Component {

  render() {
    return (
      <Wrapper>
        <List>
          {this.props.entries.filter(e => e.tab.toString() === this.props.match.params.id)
            .map(e => (
            <li key={e.id}>
              <label><Input
              type="checkbox" id={e.id}
              onClick={this.props.checkboxHandler.bind(this, e)}
              checked={e.checked}
              readOnly/>
              {e.name}
              </label>
            </li>
          ))}
        </List>
        <Button onClick={this.props.removeEntries.bind(this, parseInt(this.props.match.params.id))}>
          Удалить
        </Button>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeEntries: (id) => {
      dispatch({type: 'REMOVE_ENTRIES', tab: id})
    },
    checkboxHandler: (entry) => {
      dispatch({type: 'SELECT_ENTRIES', entry: entry})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)