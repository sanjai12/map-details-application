const initialState = {
  details: {},
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

    case "CLEAR_MAP_DETAILS":
      return {
        ...state,
        details: {},
      };

    default:
      return state;
  }
};

export default DetailReducer;
