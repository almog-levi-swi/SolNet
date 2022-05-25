import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { groupByTypes } from "../../Consts/types.js";

export const GraphBy = ({ setGraphBy, graphBy }) => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p onClick={() => setGraphBy(groupByTypes.food)}>Food</p>,
        },
        {
          key: "2",
          label: (
            <p onClick={() => setGraphBy(groupByTypes.shirtsize)}>Shirt</p>
          ),
        },
        {
          key: "3",
          label: (
            <p onClick={() => setGraphBy(groupByTypes.married)}>Married</p>
          ),
        },
        {
          key: "4",
          label: (
            <p onClick={() => setGraphBy(groupByTypes.student)}>Full Time</p>
          ),
        },
      ]}
    />
  );
  const convertName = (graphBy) => {
    switch (graphBy) {
      case "food_preferences":
        return "Food";
      case "shirt_size":
        return "Shirt";
      case "married":
        return "Married";
      case "full_time":
        return "Full Time";
      default:
        return "";
    }
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>{convertName(graphBy) || "Category"}</Button>
        </Dropdown>
      </Space>
    </Space>
  );
};
