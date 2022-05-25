import { getEmployees } from "../../firebaseDB.js";
import React, { useState } from "react";
import { Chart } from "../chart/Chart.js";
import { GraphBy } from "../GraphBy/graphBy.js";
import { groupByTypes } from "../../Consts/types.js";
import { Divider, Col, Row, Card } from "antd";
import TableEmployees from "./TableEmployees.js";
import Notifications from "../Notifications.js";

export const Dashboard = () => {
    const [graphBy, setGraphBy] = useState(groupByTypes.food);
    const [convertedEmployees, setConvertedEmployees] = useState([]);


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
    console.log(convertedEmployees);
    return (
        <>
            <Divider orientation="center"><h1>SolNet</h1></Divider>
            <Row justify='space-around' align='middle'>
                <Col span={8}>
                    <Divider orientation='left'><b>Week Events</b></Divider>
                    <Notifications employees={convertedEmployees} />
                </Col>
                <Col span={12}>

                    <Row justify='space-around' align='middle'>
                        <Col span={20}><Chart data={convertedEmployees} graphBy={graphBy} /></Col>
                        <Col span={4}><GraphBy setGraphBy={setGraphBy} /></Col>
                    </Row>
                </Col>
            </Row>
            <Divider orientation='left'><h3>Employees Details</h3></Divider>
            <Row justify='space-around' align='middle' >
                <Col span={24}>
                    <TableEmployees employees={convertedEmployees} />
                </Col>
            </Row>
        </>
    );
};
