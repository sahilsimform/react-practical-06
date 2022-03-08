import axios from "axios";

export function fetchUserRequest() {
  return {
    type: "FETCH_USERS_REQUEST",
  };
}

export function fetchUserSuccess(obj) {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: obj,
  };
}

export function fetchUserError(err) {
  return {
    type: "FETCH_USERS_ERROR",
    payload: err,
  };
}

export function fetchUsers(pagenumber) {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(`https://reqres.in/api/users?page=${pagenumber}`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user.data));
      })
      .catch((error) => dispatch(fetchUserError(error)));
  };
}
