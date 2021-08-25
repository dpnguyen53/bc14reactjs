import React, { Component } from "react";

export default class RenderingElemts extends Component {
  username = "Cybersoft";
  age = 18;
  lop = "BC14";

  renderInfo() {
    return (
      <>
        <p>
          Hello {this.username} - Tuoi: {this.age}
        </p>
        <p>Lop: {this.lop}</p>
      </>
    );
  }

  render() {
    return (
      <div>
        <h3>*RenderingElemts</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
