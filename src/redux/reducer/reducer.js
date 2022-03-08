const initialState = {
  details: [],
  loading: false,
  error: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, details: action.payload };
    case "FETCH_USERS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default Reducer;
