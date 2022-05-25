import { getEmployees } from "../../firebaseDB.js";
import React, { useState } from "react";
import { Chart } from "../chart/Chart.js";
import { GraphBy } from "../GraphBy/graphBy.js";
import { groupByTypes } from "../../Consts/types.js";
import { Divider, Col, Row, Card } from "antd";
import TableEmployees from "./TableEmployees.js";
import Notifications from "../Notifications.js";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/user-auth-context.js";

const Dashboard = () => {
  const convertDateToString = (date) => {
    return `${date.dd}/${date.mm}/${date.yy}`;
  };
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
  console.log(convertedEmployees);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <Card
        style={{
          textAlign: "center",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "85%",
          margin: "auto",
        }}
      >
        <button onClick={handleLogout}>Logout</button>
        <Divider orientation="center">
          <h1>Dashboard</h1>
        </Divider>
        <Row justify="space-around" align="middle">
          <Col span={6}>
            <Notifications employees={convertedEmployees} />
          </Col>
          <Col span={12}>
            <GraphBy setGraphBy={setGraphBy} />
            <Chart data={convertedEmployees} graphBy={graphBy} />
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={24}>
            <TableEmployees employees={convertedEmployees} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Dashboard;
