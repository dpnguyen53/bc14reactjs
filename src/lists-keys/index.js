import React, { Component } from "react";

export default class ListsKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { ten: "Nguyen", tuoi: 18 },
        { ten: "Dat", tuoi: 20 },
        { ten: "Tung", tuoi: 21 },
      ],
    };
  }

  renderUsers = () => {
    const { listUser } = this.state;
    return listUser.map((user, index) => {
      return (
        <li key={index}>
          ten: {user.ten} - tuoi: {user.tuoi}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>*ListsKeys</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
