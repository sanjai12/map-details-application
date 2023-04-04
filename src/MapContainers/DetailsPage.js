import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Empty, PageHeader } from "antd";
import { connect } from "react-redux";

const DetailsPage = (props) => {
  const details = props.placeDetails;

  return (
    <div>
      <PageHeader onBack={props.backHandler} title="Back" />
      {details.places && details.places.length ? (
        <MapContainer
          style={{ height: 400, width: "100%" }}
          center={[details.places[0].latitude, details.places[0].longitude]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {details.places.map((data) => (
            <Marker position={[data.latitude, data.longitude]}>
              <Popup>
                <div>
                  <div>{`Postal Code : ${data["post code"]}`}</div>
                  <div>{`State : ${details["state"]}`}</div>
                  <div>{`Country : ${details["country"]}`}</div>
                  <div>{`place : ${data["place name"]}`}</div>
                  <div>{`latitude : ${data["latitude"]}`}</div>
                  <div>{`longitude : ${data["longitude"]}`}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <Empty />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    placeDetails: state.DetailReducer.details,
  };
};

export default connect(mapStateToProps, null)(DetailsPage);
