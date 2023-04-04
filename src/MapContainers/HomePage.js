import React, { useState } from "react";
import { Layout, Switch, Breadcrumb } from "antd";
import { PlaceDetailsAction } from "../Action/PlaceDetailsActions";
import { useDispatch } from "react-redux";
import DetailsPage from "./DetailsPage";
import SummaryPage from "./SummaryPage";
import PlaceLocator from "./PlaceLocator";
import HeaderComponent from "../Components/HeaderComponent";
import classes from "./HomePage.module.css";

const { Content } = Layout;

const HomePage = () => {
  const [breadcrum, setBreadcrum] = useState(["Home"]);
  const [detailsPage, setDetailPage] = useState(false);
  const [mapMode, setMapMode] = useState(false);
  const dispatch = useDispatch();

  const getPlaceDetails = (jsonValues) => {
    dispatch(
      PlaceDetailsAction.getPlaceDetails(jsonValues, (response) => {
        if (response) {
          setDetailPage(true);
          const list = [...breadcrum, ...["Place Details"]];
          setBreadcrum(list);
        }
      })
    );
  };

  const backHandler = () => {
    setDetailPage(false);
    setBreadcrum(["Home"]);
  };

  const checkHandler = (event) => {
    if (event.target.id === "Home") {
      backHandler();
    }
  };

  const switchHandler = (value) => {
    dispatch({ type: "CLEAR_MAP_DETAILS" });
    setDetailPage(false);
    setMapMode(value);
  };

  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {breadcrum.map((data) => (
            <Breadcrumb.Item
              style={{ cursor: "pointer" }}
              id={data}
              onClick={checkHandler}
            >
              {data}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className="site-layout-content">
          <div className={classes.switchStyle}>
            <label className={classes.labelStyle}>
              Switch to Detailed Map View{" "}
            </label>
            <Switch checked={mapMode} onChange={switchHandler} />
          </div>
          {mapMode && (
            <React.Fragment>
              {!detailsPage ? (
                <SummaryPage searchMap={getPlaceDetails} />
              ) : (
                <DetailsPage backHandler={backHandler} />
              )}
            </React.Fragment>
          )}
          {!mapMode && <PlaceLocator />}
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
