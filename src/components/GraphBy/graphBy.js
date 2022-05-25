import React from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { groupByTypes } from '../../Consts/types.js';

export const GraphBy = ({ setGraphBy }) => {

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <p onClick={() => setGraphBy(groupByTypes.food)}>
                            Food
                        </p>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <p onClick={() => setGraphBy(groupByTypes.shirtsize)}>
                            Shirt
                        </p >
                    ),
                },
                {
                    key: '3',
                    label: (
                        <p onClick={() => setGraphBy(groupByTypes.married)}>
                            Married
                        </p>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <p onClick={() => setGraphBy(groupByTypes.student)}>
                            Student
                        </p>
                    ),
                },
            ]}
        />
    );
    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>Graph By</Button>
                </Dropdown>
            </Space>
        </Space>
    )
}



