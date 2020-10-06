import React from 'react';
import {ResponsiveBar} from '@nivo/bar';

export const ChartBar = ({data}: any) => (
    <ResponsiveBar
        data={data}
        keys={['startYearValue', 'cumulativeInterest', 'cumulativeContribution']}
        indexBy="startYearValue"
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.2}
        colors={{scheme: 'nivo'}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'years',
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'amount',
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        enableLabel={false}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
);
