import { message } from "antd";
import axios from "axios";

export const PlaceDetailsAction = {
  getPlaceDetails,
};

function getPlaceDetails(values, callback) {
  return (dispatch) => {
    const { country, state, place } = values;
    axios
      .get(`https://api.zippopotam.us/${country}/${state}/${place}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "PLACE_DETAILS", payload: response.data });
        callback(true);
      })
      .catch((err) => {
        message.error("No Records Found!");
      });
  };
}
