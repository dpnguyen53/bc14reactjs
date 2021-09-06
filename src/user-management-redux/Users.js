import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderUserList = () => {
    let { userList, keyword } = this.props;
    //filter userList
    userList = userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return userList?.map((user) => {
      return (
        <UserItem
          key={user.id}
          user={user}
          // getUserDelete={getUserDelete}
          getUserEdit={this.props.getUserEdit}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    /**
     * key: value
     * - key: đại diện cho tên props
     * - value: lấy giá trị từ roorReducer
     */
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(Users);
