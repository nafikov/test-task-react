import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BtnPrimary } from './../commons/Button';

const Form = styled.form`
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  line-height: 22px;
  padding-left: 5px;
`;

const Select = styled.select`
  height: 28px;
  line-height: 22px;
  padding-left: 5px;
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
    entry.tab = parseInt(e.target.tab.value);
    entry.id = Date.now();
    entry.checked = false;
    this.props.addEntry(entry);

    e.target.name.value = '';
    e.target.tab.value = '';
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler.bind(this)}>
        <Input type="text" name="name" placeholder="Введите задачу" required/>
        <Select name="tab" defaultValue='' onChange={this.selectHandler.bind(this)} required>
          <option disabled value=''>Выберите вкладку</option>
          {this.props.tabs.map(tab => (
            <option value={tab.id} key={tab.id}>{tab.name}</option>
          ))}
        </Select>
        <BtnPrimary type="submit">Добавить</BtnPrimary>
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
