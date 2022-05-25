import React, { useState } from 'react';
import { Chart } from '../chart/Chart.js';
import { GraphBy } from '../GraphBy/graphBy.js';
import { DummyData } from '../../Consts/dummyData.js';
import { groupByTypes } from '../../Consts/types.js';
import { Divider, Col, Row, Card } from 'antd';
import TableEmployees from './TableEmployees.js';
import Notifications from '../Notifications.js';

export const Dashboard = () => {
    const [graphBy, setGraphBy] = useState(groupByTypes.food);
    return (
        <>
            <Divider orientation="center"><h1>SolNet</h1></Divider>
            <Row justify='space-around' align='middle'>
                <Col span={8}>
                    <Divider orientation='left'><b>Week Events</b></Divider>
                    <Notifications employees={DummyData} />
                </Col>
                <Col span={12}>

                    <Row justify='space-around' align='middle'>
                        <Col span={20}><Chart data={DummyData} graphBy={graphBy} /></Col>
                        <Col span={4}><GraphBy setGraphBy={setGraphBy} /></Col>
                    </Row>
                </Col>
            </Row>
            <Divider orientation='left'><h3>Employees Details</h3></Divider>
            <Row justify='space-around' align='middle' >
                <Col span={24}>
                    <TableEmployees employees={DummyData} />
                </Col>
            </Row>
        </>
    )
}

