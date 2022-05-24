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
        <div style={{ backgroundColor: 'orange' }}>
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '10px', backgroundColor: 'white', width: '85%', margin: 'auto' }}
            >
                <Divider orientation='center'><h1>Dashboard</h1></Divider>
                <Row justify='space-around' align='middle'>
                    <Col span={6}>
                        <Notifications employees={DummyData} />
                    </Col>
                    <Col span={12}>
                        <GraphBy setGraphBy={setGraphBy} />
                        <Chart data={DummyData} graphBy={graphBy} />
                    </Col>
                </Row>
                <Row justify='space-around' align='middle' >
                    <Col span={24}>
                        <TableEmployees employees={DummyData} />
                    </Col>
                </Row>

            </Card>
        </div>
    )
}

