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

    default:
      return state;
  }
};

export default DetailReducer;
