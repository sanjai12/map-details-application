const initialState = {
  spinner: false,
};

const SpinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SPINNER_ON":
      return {
        spinner: true,
      };

    case "SPINNER_OFF":
      return {
        spinner: false,
      };

    default:
      return state;
  }
};

export default SpinnerReducer;
