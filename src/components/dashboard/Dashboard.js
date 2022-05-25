import { getEmployees } from "../../firebaseDB.js";
import React, { useState } from "react";
import { Chart } from "../chart/Chart.js";
import { GraphBy } from "../GraphBy/graphBy.js";
import { groupByTypes } from "../../Consts/types.js";
import { Divider, Col, Row } from "antd";
import TableEmployees from "./TableEmployees.js";
import Notifications from "../Notifications.js";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/user-auth-context.js";

export const Dashboard = () => {
  const [graphBy, setGraphBy] = useState(groupByTypes.food);
  const [convertedEmployees, setConvertedEmployees] = useState([]);

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const convertDateToString = (date) => {
    return `${date.dd}/${date.mm}/${date.yy}`;
  };

  convertedEmployees.length === 0 &&
    getEmployees().then((employees) => {
      const convertedEmployees = employees.map((employee) => {
        employee.record.full_time = `${employee.record.full_time}`;
        employee.record.married = `${employee.record.married}`;
        employee.record.has_children = `${employee.record.has_children}`;
        employee.record.birthdate = convertDateToString(
          employee.record.birthdate
        );
        employee.record.joinDate = convertDateToString(
          employee.record.joinDate
        );
        employee.record.study_end_date = convertDateToString(
          employee.record.study_end_date
        );
        return employee.record;
      });
      setConvertedEmployees(convertedEmployees);
    });
  return (
    <>
      <button
        onClick={handleLogout}
        style={{
          float: "right",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#1890ff",
        }}
      >
        Logout
      </button>
      <Divider orientation="center">
        <h1>SolNet</h1>
      </Divider>
      <Row justify="space-around" align="middle">
        <Col span={8}>
          <h2 style={{ textAlign: "left", marginLeft: "20px" }}>Week Events</h2>
          <Notifications employees={convertedEmployees} />
        </Col>
        <Col span={12}>
          <Row justify="space-around" align="middle">
            <Col span={20}>
              <h2
                style={{
                  textAlign: "left",
                  marginTop: "25px",
                  marginLeft: "50px",
                }}
              >
                Statistics
              </h2>
              <Chart data={convertedEmployees} graphBy={graphBy} />
              <GraphBy setGraphBy={setGraphBy} graphBy={graphBy} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider orientation="left">
        <h3>Employees Details</h3>
      </Divider>
      <Row justify="space-around" align="middle">
        <Col span={24}>
          <TableEmployees employees={convertedEmployees} />
        </Col>
      </Row>
    </>
  );
};
export default Dashboard;
