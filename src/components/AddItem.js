import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Form = styled.form`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  // margin-left: 10px;
  // margin-right: 20px;
  line-height: 22px;
  padding-left: 5px;
`;

const Select = styled.select`
  // margin-left: 10px;
  // margin-right: 20px;
  height: 28px;
  line-height: 22px;
  padding-left: 5px;
`;

const Button = styled.button`
  background-color: bisque;
  padding: 7px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #fff;
  }
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
        <Input type="text" name="name" placeholder="Введите задачу" required/>
        <Select name="tab" defaultValue='' onChange={this.selectHandler.bind(this)} required>
          <option disabled value=''>Выберите вкладку</option>
          {this.props.tabs.map(tab => (
            <option value={tab.id} key={tab.id}>{tab.name}</option>
          ))}
        </Select>
        <Button type="submit">Добавить</Button>
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
