import React, { useState } from "react";
import { Layout, Switch, Breadcrumb } from "antd";
import { PlaceDetailsAction } from "../Action/PlaceDetailsActions";
import { connect, useDispatch } from "react-redux";
import DetailsPage from "./DetailsPage";
import SummaryPage from "./SummaryPage";
import PlaceLocator from "./PlaceLocator";

const { Header, Content } = Layout;

const HomePage = (props) => {
  const [breadcrum, setBreadcrum] = useState(["Home"]);
  const [detailsPage, setDetailPage] = useState(false);
  const [mapMode, setMapMode] = useState(false);
  const dispatch = useDispatch();

  const getPlaceDetails = (jsonValues) => {
    props.getPlaceDetails(jsonValues, (response) => {
      if (response) {
        setDetailPage(true);
        const list = [...breadcrum, ...["Place Details"]];
        setBreadcrum(list);
      }
    });
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
      <Header>
        <center>
          <h2 style={{ color: "#fff" }}>Map Details Application</h2>
        </center>
      </Header>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 15,
            }}
          >
            <label
              style={{
                marginTop: "-3px",
                paddingRight: 5,
                fontSize: 16,
                fontWeight: 500,
              }}
            >
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

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaceDetails: (values, callback) =>
      dispatch(PlaceDetailsAction.getPlaceDetails(values, callback)),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
