import { message } from "antd";
import axios from "axios";

export const PlaceDetailsAction = {
  getPlaceDetails,
  getCountriesList
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

function getCountriesList(callback) {
  axios
    .get("https://countriesnow.space/api/v0.1/countries/positions")
    .then((response) => {
      if (response && response.data) {
        callback(
          response.data?.data.map((d) => ({ ...d, value: d.name })) || []
        );
      }
    })
    .catch((err) => {
      message.error("No Records Found!");
    });
}
