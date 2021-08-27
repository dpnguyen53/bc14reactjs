import React, { Component } from "react";
import Child from "./child";
import ChildFunction from "./childFunction";
import Children from "./children";

export default class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
      age: 18,
    };
  }

  handleChangeInfo = () => {
    //thay đổi username: Cybersoft => Nguyen
    this.setState({
      username: "Nguyen",
      age: 20,
    });
  };

  handleResetInfo = (username, age) => {
    //cập nhật lại state
    this.setState({
      username,
      age,
    });
  };

  render() {
    return (
      <div>
        <h3>Communication</h3>

        <p>
          Username: {this.state.username} - Age: {this.state.age}
        </p>
        <button className="btn btn-success" onClick={this.handleChangeInfo}>
          ChangeInfo
        </button>
        <hr width="50%" />
        <Child
          username={this.state.username}
          age={this.state.age}
          getInfoReset={this.handleResetInfo}
        />

        <hr width="50%" />
        <ChildFunction username={this.state.username} age={this.state.age} />

        <hr width="50%" />
        <Children>
          <p>
            Username: {this.state.username} - Age: {this.state.age}
          </p>
          <h6>Hello</h6>
          <span>x</span>
        </Children>
      </div>
    );
  }
}
