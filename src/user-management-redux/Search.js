import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyWord } from "./../redux/actions";

class Search extends Component {
  handleOnChange = (event) => {
    this.props.getKeyword(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyWord(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
