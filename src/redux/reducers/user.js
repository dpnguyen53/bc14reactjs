const initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER": {
      let userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        userList.splice(index, 1);
        //Cập nhật lại mảng userList trong state
        state.userList = userList;
      }
      return { ...state };
    }

    case "GET_KEYWORD": {
      state.keyword = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
