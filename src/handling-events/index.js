import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingEvent() {
    console.log(123);
  }

  handlingEventParams(username, age) {
    console.log(username, age);
  }

  render() {
    return (
      <div>
        <h3>*HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.handlingEvent}>
          HandlingEvent
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingEventParams("Nguyen", 18);
          }}
        >
          HandlingEvent Params
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            console.log("handle");
          }}
        >
          Handle
        </button>
      </div>
    );
  }
}
