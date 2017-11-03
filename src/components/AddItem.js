import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Form = styled.form`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class AddItem extends Component {
  currentSelect = null;

  selectHandler(e) {
    this.currentSelect = e.target.value;
  }

  submitHandler(e) {
    e.preventDefault();

    let entry = {};
    entry.name = e.target.name.value;
    entry.tab = e.target.tab.value;
    entry.id = Date.now();
    this.props.addEntry(entry);

    e.target.name.value = '';
    e.target.tab.value = '';
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler.bind(this)}>
        <input type="text" name="name" placeholder="Введите задачу" required/>
        <input type="checkbox" name='check'/>
        <select name="tab" defaultValue='' onChange={this.selectHandler.bind(this)} required>
          <option disabled value=''>Выберите вкладку</option>
          {this.props.tabs.map(tab => (
            <option value={tab.id} key={tab.id}>{tab.name}</option>
          ))}
        </select>
        <button type="submit">Добавить</button>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEntry: (entry) => {
      dispatch({type: 'ADD_ENTRY', entry: entry})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
