import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
      isLogin: false, //false chua login
    };
  }

  handleLogin = () => {
    //cập nhật lại state
    this.setState({
      isLogin: true,
    });
  };

  renderHTML() {
    // 1===2 ? "dung" : "sai"
    return this.state.isLogin ? (
      <div>
        <h1>Hello {this.state.username}</h1>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              isLogin: false,
            });
          }}
        >
          Logout
        </button>
      </div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  }

  render() {
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
