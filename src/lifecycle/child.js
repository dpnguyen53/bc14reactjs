import React, { PureComponent } from "react";

export default class Child extends PureComponent {
  render() {
    console.log("render - Child");
    return (
      <div>
        <h3>Child</h3>
      </div>
    );
  }
}
