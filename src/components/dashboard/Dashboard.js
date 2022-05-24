import React, { useState } from 'react';
import { Chart } from '../chart/Chart';
import { GraphBy } from '../GraphBy/graphBy';
import { DummyData } from '../../Consts/dummyData';
import { groupByTypes } from '../../Consts/types';
import { Divider, Col, Row, Card } from 'antd';

export const Dashboard = () => {
    const [graphBy, setGraphBy] = useState(groupByTypes.food);
    return (
        <Card style={{ textAlign: 'center' }}
            bordered={false}
        >
            <Divider orientation='center'><h1>Title</h1></Divider>
            <Row justify='space-around' align='middle'>
                <Col span={4}><h1>Events</h1></Col>
                <Col span={8}>
                    <GraphBy setGraphBy={setGraphBy} />
                    <Chart data={DummyData} graphBy={graphBy} />
                </Col>
            </Row>
            <Row justify='space-around' align='middle' style={{ textAlign: 'center' }}>
                <Col span={12}><h1>Table</h1></Col>
            </Row>

        </Card>
    )
}

