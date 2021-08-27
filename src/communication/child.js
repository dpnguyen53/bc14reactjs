import React, { Component } from "react";

export default class Child extends Component {
  handleResetInfo = () => {
    //chuyển thông tin muốn reset ra ngoài component index, giá trị là "Cybersoft"
    this.props.getInfoReset("Cybersoft", 18);
  };

  render() {
    const { username, age } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className="btn btn-danger" onClick={this.handleResetInfo}>
          ResetInfo
        </button>
      </div>
    );
  }
}
