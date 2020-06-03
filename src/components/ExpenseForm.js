import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense.description && props.expense.description,
      note: props.expense.note && props.expense.note,
      amount: props.expense.amount && (props.expense.amount / 100).toString(),
      createdAt: props.expense.createdAt ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({
      description
    })
  }
  onNoteChange = e => {
    e.persist();
    this.setState({
      note: e.target.value
    })
  }
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount })
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({
        createdAt
      })
    }

  }
  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please provide description and amount.' })
    } else {
      this.setState({ error: '' })
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      })
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type='text'
            placeholder='Description'
            autoFocus
          />
          <input
            onChange={this.onAmountChange}
            value={this.state.amount}
            type='text'
            placeholder='Amount'
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder='Add a note'
          >
          </textarea>
          <button>Add</button>
        </form>
      </div>
    )
  }
}