import React from "react";
import { Form, Button, Select, Card } from "antd";

const { Option } = Select;

const countryList = [
  { label: "US", value: "us" },
  { label: "CA", value: "ca" }
];

const stateList = [
  { label: "Georgia", value: "GA" },
  { label: "Massachusetts", value: "MA" },
  { label: "Newyork", value: "NY" },
  { label: "Losangeles", value: "LA" },
  { label: "Test", value: "TS" }
];

const placeList = ["Belmont", "Smyrna", "test"];

const SummaryPage = (props) => {
  const onFinish = (values) => {
    props.searchMap(values);
  };

  return (
    <Card title="Search the Map Details" bordered={false}>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: "Please select country!"
            }
          ]}
        >
          <Select
            showSearch
            allowClear
            style={{ width: 200 }}
            placeholder="Select a country"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countryList.map((data, index) => (
              <Option key={index} value={data.value}>
                {data.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[
            {
              required: true,
              message: "Please select state!"
            }
          ]}
        >
          <Select
            showSearch
            allowClear
            style={{ width: 200 }}
            placeholder="Select a state"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {stateList.map((data, index) => (
              <Option key={index} value={data.value}>
                {data.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Place"
          name="place"
          rules={[
            {
              required: true,
              message: "Please select place!"
            }
          ]}
        >
          <Select
            showSearch
            allowClear
            style={{ width: 200 }}
            placeholder="Select a place"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {placeList.map((data, index) => (
              <Option key={index} value={data}>
                {data}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
            Search Places
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SummaryPage;
