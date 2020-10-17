import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import {chartDataConvert} from './ResultCard.helpers';

export const ChartBar: React.FC<any> = ({chartData}) => {
    return (
        <ResponsiveBar
            data={chartDataConvert(chartData)}
            keys={['Start Value', 'Cumulative Contribution', 'Annual Interest']}
            indexBy="Year Label"
            margin={{top: 50, right: 40, bottom: 50, left: 60}}
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
            tooltipFormat={value =>
                `${Number(value).toLocaleString('pl-PL', {
                    maximumFractionDigits: 0,
                })} PLN`
            }
            enableLabel={false}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
};
