import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  render() {
    return (
      <div>
        <input value={this.props.filters.text} type="text" onChange={this.onTextChange} />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => ({
  setStartDate: date => dispatch.setStartDate(date),
  setEndDate: date => dispatch.setEndDate(date),
  setTextFilter: text => dispatch.setTextFilter(text),
  sortByDate: () => dispatch.sortByDate,
  sortByAmount: () => dispatch.sortByAmount,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseListFilters);
