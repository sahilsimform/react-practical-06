import { GET_DETAILS } from "../type";

const initialState = {
  details: [],
  loading: false,
  error: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case "FETCH_USERS_REQUEST":
      console.log(action);
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      console.log(action);
      return { ...state, loading: false, details: action.payload };
    case "FETCH_USERS_ERROR":
      console.log(action);

      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default Reducer;
