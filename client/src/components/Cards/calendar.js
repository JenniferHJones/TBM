import React, { Component } from "react";

import DatePicker from "./calendar/index";
import "./calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    };
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <div className="calendar">
        <div className="MainContent">
          <DatePicker fullDate={selectedDate} onDayClick={this.onDayClick} />
        </div>
      </div>
    );
  }

  onDayClick(newDay) {
    const { selectedDate } = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
    });
  }
}

export default Calendar;
