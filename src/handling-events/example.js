import React, { Component } from "react";

export default class ExampleHanldeEvent extends Component {
  constructor(props) {
    super(props);

    //bind phuong thuc handleLogin
    // this.handleLogin = this.handleLogin.bind(this);
  }

  username = "Cybersoft";
  isLogin = false; //false chua login

  //   renderHTML() {
  //     if (this.isLogin) {
  //       //da login
  //       return (
  //         <div>
  //           <h1>Hello {this.username}</h1>
  //           <button className="btn btn-danger">Logout</button>
  //         </div>
  //       );
  //     } else {
  //       //chua login
  //       return <button className="btn btn-success">Login</button>;
  //     }
  //   }

  //   handleLogin() {
  //     this.isLogin = true;
  //   }

  handleLogin = () => {
    console.log(this.isLogin);
    this.isLogin = true;
    console.log(this.isLogin);
  };

  renderHTML() {
    // 1===2 ? "dung" : "sai"
    return this.isLogin ? (
      <div>
        <h1>Hello {this.username}</h1>
        <button className="btn btn-danger">Logout</button>
      </div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  }

  render() {
    // console.log("render");
    return (
      <div>
        <h3>*ExampleHanldeEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
