import React from 'react';
import {ResponsiveBar} from '@nivo/bar';

export const ChartBar = ({data}: any) => (
    <ResponsiveBar
        data={data}
        keys={['startYearValue', 'cumulativeContribution', 'cumulativeInterest']}
        indexBy="year"
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.2}
        colors={{scheme: 'nivo'}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        enableLabel={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
);
