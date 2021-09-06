import React, { Component } from "react";
import { connect } from "react-redux";

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
      const action = {
        type: "GET_KEYWORD",
        payload: keyword,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
