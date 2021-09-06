import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };

    this.close = React.createRef();
    //constructor chạy 1 lần duy nhất
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * Lifecyle componentWillReceiveProps chạy khi nhận 1 props mới từ index truyền vào
     */
    if (nextProps && nextProps.userEdit) {
      //Cập nhật lại state
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        fullname: nextProps.userEdit.fullname,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      //reset state
      this.setState({
        id: "",
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getUserSubmit(this.state);

    //close modal
    this.close.current.click();
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* Kiểm tra dk để thay đổi title của Modal */}
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnChange}
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnChange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnChange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
