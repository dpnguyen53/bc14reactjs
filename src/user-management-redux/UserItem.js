import React, { Component } from "react";
import { connect } from "react-redux";

class UserItem extends Component {
  render() {
    const { user, getUserDelete } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.getUserEdit(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              getUserDelete(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * key: value
     * - key: đại diện cho tên props
     * - value: là 1 phương thức
     */
    getUserDelete: (user) => {
      //Tạo action
      const action = {
        type: "DELETE_USER",
        payload: user,
      };
      //Gửi action vào store
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
