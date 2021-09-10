import * as ActionType from "./../constants";

const actUserDelete = (user) => {
  return {
    type: ActionType.DETELE_USER,
    payload: user,
  };
};

const actUserEdit = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

const actGetKeyWord = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};

const actUserSubmit = (user) => {
  return {
    type: ActionType.ON_SUBMIT,
    payload: user,
  };
};

export { actUserSubmit, actUserDelete, actUserEdit, actGetKeyWord };
