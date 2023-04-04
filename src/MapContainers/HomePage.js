import React, { useState } from "react";
import { Layout, Breadcrumb } from "antd";
import { PlaceDetailsAction } from "./Action/PlaceDetailsAction";
import { connect } from "react-redux";
import DetailsPage from "./DetailsPage";
import SummaryPage from "./SummaryPage";

const { Header, Content } = Layout;

const HomePage = (props) => {
  const [breadcrum, setBreadcrum] = useState(["Home"]);
  const [detailsPage, setDetailPage] = useState(false);

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

  return (
    <Layout className="layout">
      <Header>
        <center>
          <h2 style={{ color: "#fff" }}>Map Details App</h2>
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
          {!detailsPage ? (
            <SummaryPage searchMap={getPlaceDetails} />
          ) : (
            <DetailsPage backHandler={backHandler} />
          )}
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
