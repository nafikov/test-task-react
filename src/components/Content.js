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
  constructor() {
    super();
    this.state = {
      checkedEntries: []
    };
  }

  removeEntries(arr) {
    this.setState({
      checkedEntries: this.state.checkedEntries.filter(e => arr.indexOf(e.toString()) === -1)
    });
    this.props.removeEntries(arr);
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
            <li key={e.id}><label htmlFor=""><input type="checkbox" id={e.id} onChange={this.checkboxHandler.bind(this)}/>{e.name}</label></li>
          ))}
        </List>
        <button onClick={this.removeEntries.bind(this, this.state.checkedEntries)}>Удалить</button>
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