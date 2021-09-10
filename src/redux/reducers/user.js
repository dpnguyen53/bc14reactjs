import * as ActionType from "./../constants";

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
    case ActionType.DETELE_USER: {
      let userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        userList.splice(index, 1);
        //Cập nhật lại mảng userList trong state
        state.userList = userList;
      }
      return { ...state };
    }

    case ActionType.GET_KEYWORD: {
      state.keyword = action.payload;
      return { ...state };
    }

    case ActionType.ON_SUBMIT: {
      let userList = [...state.userList];

      if (action.payload.id) {
        //Update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        //Add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }

      state.userList = userList;

      return { ...state };
    }

    case ActionType.EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
