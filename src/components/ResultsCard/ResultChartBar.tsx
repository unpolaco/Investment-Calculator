import React from 'react';
import {ResponsiveBar} from '@nivo/bar';

interface ChartData {
    [key: string]: string;
}
interface AnnualResultProps {
    annualContribution?: number;
    annualInterest?: number;
    cumulativeContribution?: number;
    cumulativeInterest?: number;
    id?: string;
    startValue?: number;
    startYearValue?: number;
    year?: number;
    yearLabel?: string;
}

export const ChartBar: React.FC<any> = ({data}) => {
    console.log(data);

    const chartData = data.map((el: ChartData) => {
        return {
            'Start Value': el.startValue,
            'Cumulative Contribution': el.cumulativeContribution,
            'Cumulative Interest': el.cumulativeInterest,
            'Year Label': el.yearLabel,
        };
    });
    return (
        <ResponsiveBar
            data={chartData}
            keys={['Start Value', 'Cumulative Contribution', 'Cumulative Interest']}
            indexBy="Year Label"
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
};
