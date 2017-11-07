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
  constructor() {
    super();
    this.state = {
      checkedEntries: []
    };
  }

  removeEntries(entries) {
    this.setState({
      checkedEntries: this.state.checkedEntries.filter(e => entries.indexOf(e.toString()) === -1)
    });
    this.props.removeEntries(entries);
  }

  checkboxHandler(e) {
    if (e.target.checked) {
      this.setState({checkedEntries: this.state.checkedEntries.concat(e.target.id)});
    } else {
      this.setState({checkedEntries: this.state.checkedEntries.filter(entry => entry !== e.target.id)});
    }
  }

  render() {
    return (
      <Wrapper>
        <List>
          {this.props.entries.filter(e => e.tab === this.props.match.params.id)
            .map(e => (
            <li key={e.id}><label><Input type="checkbox" id={e.id} onChange={this.checkboxHandler.bind(this)}/>{e.name}</label></li>
          ))}
        </List>
        <Button onClick={this.removeEntries.bind(this, this.state.checkedEntries)}>Удалить</Button>
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
    removeEntries: (entries) => {
      dispatch({type: 'REMOVE_ENTRIES', entries: entries})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)