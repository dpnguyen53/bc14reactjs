import React, { Component } from "react";
import Child from "./child";
import Child2 from "./child2";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    //constructor chạy đúng 1 lần duy nhất trong quá trình component thực thi
    console.log("constructor");

    this.state = {
      number: 0,
      status: true,
    };
  }

  UNSAFE_componentWillMount() {
    //componentWillMount chạy đúng 1 lần duy nhất trong quá trình component thực thi
    console.log("componentWillMount");
  }

  componentDidMount() {
    //componentDidMount chạy đúng 1 lần duy nhất trong quá trình component thực thi
    // Fetch data (gọi api)
    console.log("componentDidMount");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState && nextState.number === 2) {
      return false;
    }
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>*Lifecycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Increment
        </button>
        <hr />
        <Child />
        <hr />
        {this.state.status && <Child2 number={this.state.number} />}
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              status: false,
            });
          }}
        >
          Change status
        </button>
      </div>
    );
  }
}
