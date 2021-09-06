import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  //Tập hợp tất cả những reducer con ở đây
  //userReducer: userReducer,
  userReducer,
});

export default rootReducer;
