import React from "react";
import PropTypes from "prop-types";

import "./CurrentDateTime.css";

class CurrentDateTime extends React.Component {
  render() {
    const { day, date, time } = this.props.value;
    return (
      <div className="CurrentDateTime">
        <div className="day">{day}</div>
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
    );
  }
}

export default CurrentDateTime;

CurrentDateTime.propTypes = {
  value: PropTypes.shape({
    day: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string
  })
};
