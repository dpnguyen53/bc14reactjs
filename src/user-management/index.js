import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
      keyword: "",
      userEdit: null,
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((user) => user.id === id);
  };

  handleDeleteUser = (user) => {
    const index = this._findIndex(user.id);
    if (index !== -1) {
      let userList = [...this.state.userList];
      userList.splice(index, 1);

      this.setState({
        userList,
      });
    }
  };

  //Hàm này nhận keyword từ component Search truyền ra
  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  };

  //Hàm này nhận user từ component Model truyền ra
  handleOnSubmit = (user) => {
    /**
     * Thêm user vào state.userList
     *  - Clone state.userList thành mảng mới
     *  - Tạo id trong user trước khi thêm vào state.userList
     */

    if (user.id) {
      //update
    } else {
      //add
    }

    const userNew = { ...user, id: new Date().getTime() };

    let userList = [...this.state.userList, userNew];

    this.setState({
      userList,
    });
  };

  //Hàm này nhận user từ component UserItem truyền ra
  handleUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  render() {
    const { keyword, userEdit } = this.state;
    /**
     * Duyệt mảng this.state.userList bằng filter
     * Điều kiện tìm kiếm keyword có trùng với lại user.fullname hay không? (Chuyển text về viết thường)
     */
    const userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          getUserDelete={this.handleDeleteUser}
          getUserEdit={this.handleUserEdit}
        />
        <Modal getUserSubmit={this.handleOnSubmit} userEdit={userEdit} />
      </div>
    );
  }
}

export default Home;
