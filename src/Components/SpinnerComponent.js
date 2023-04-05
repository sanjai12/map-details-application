import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const SpinnerComponent = (props) => {
  const spinner = useSelector((state) => state.SpinnerReducer.spinner);
  return (
    <Spin spinning={spinner} tip="Loading...">
      {props.children}
    </Spin>
  );
};

export default SpinnerComponent;
