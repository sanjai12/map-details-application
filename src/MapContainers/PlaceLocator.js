import { AutoComplete, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlaceDetailsAction } from "../Action/PlaceDetailsActions";
import DetailsPage from "./DetailsPage";

const PlaceLocator = () => {
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    PlaceDetailsAction.getCountriesList((countries) => {
      setOptions(countries);
    });
  }, []);

  const onSelect = (value, option) => {
    const countryDetails = {
      places: [
        {
          latitude: option.lat,
          longitude: option.long,
          country: option.name,
          abbreviation: option.iso2,
        },
      ],
    };
    dispatch({ type: "PLACE_DETAILS", payload: countryDetails });
  };
  return (
    <React.Fragment>
      <div
        style={{ paddingBottom: 15, display: "flex", justifyContent: "center" }}
      >
        <AutoComplete
          dropdownMatchSelectWidth={400}
          style={{ width: 500 }}
          options={options}
          onSelect={onSelect}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input.Search
            placeholder="Input Search Countries"
            allowClear
            enterButton="Search Countries"
            size="large"
          />
        </AutoComplete>
      </div>
      <DetailsPage />
    </React.Fragment>
  );
};
export default PlaceLocator;
