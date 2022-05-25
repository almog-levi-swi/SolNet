import React from "react";
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryLabel,
} from "victory";
import { Colors } from '../../Consts/colors.js';

export const Chart = ({ data, graphBy }) => {
    const quantity = 'quantity';
    const foodCategories = data.reduce((acc, cur) => {
        acc[cur[graphBy]] = (acc[cur[graphBy]] || 0) + 1;
        return acc;
    }, {})
    // console.log('foodCategories', Object.keys(foodCategories));

    const foodTypes = [];
    Object.keys(foodCategories).forEach(f => {
        foodTypes.push({ [graphBy]: f, quantity: foodCategories[f] })
    });

    // console.log(foodTypes);

    return (
        <>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={40}
                width={600}
            >
                <VictoryAxis
                    tickFormat={[...Object.keys(foodCategories)]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => x}
                />
                <VictoryBar
                    data={foodTypes}
                    x={graphBy}
                    y={quantity}
                    style={{ data: { fill: Colors.BASE, width: 60 }, labels: { fill: 'white', fontWeight: 'bold', fontSize: '20px' } }}
                    labels={({ datum }) => [datum.quantity]}
                    labelComponent={<VictoryLabel dy={30} />}
                />
            </VictoryChart>
        </>
    );
}
