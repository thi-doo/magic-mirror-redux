import React from "react";
import PropTypes from "prop-types";

import "./Quote.css";

class Quote extends React.Component {
  render() {
    return (
      <div className="Quote">
        <div className="body">{this.props.quote}</div>
        <div className="author">By: {this.props.author}</div>
      </div>
    );
  }
}

export default Quote;

Quote.propTypes = {
  value: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string
  })
};
