import React, { Component } from "react";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      username: "Cybersoft",
      numberChild: 5,
    };
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Hello Child2 Component");
    }, 1000);
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps && nextProps.number === currentState.numberChild) {
      //cap nhat lai state
      return {
        username: "Nguyen",
      };
    }
    return null;
  }

  componentWillUnmount() {
    /**
     * Khi component bị huỷ thì componentWillUnmount mới thực thi
     */
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Child2</h3>
        <p>
          Props number: {this.props.number} - State number:{" "}
          {this.state.numberChild}
        </p>
        <p>{this.state.username}</p>
      </div>
    );
  }
}
