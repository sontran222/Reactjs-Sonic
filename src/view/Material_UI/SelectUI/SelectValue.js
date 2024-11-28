import { Select, Space } from "antd";
import React, { Component } from "react";
import "./SelectValue.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const option = [
  {
    value: "None",
    label: "Sắp xếp",
    disabled: true,
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
];
class SelectValue extends Component {
  render() {
    return (
      <Space>
        <Select defaultValue="None" onChange={handleChange} options={option} />
      </Space>
    );
  }
}

export default SelectValue;
