import React from 'react';
import {ChartBar} from './ResultChartBar';
import {ChartPie} from './ResultChartPie';

export default function ResultCard({chartBarData, chartPieData}: any) {
    return (
        <div style={{height: '400px'}}>
            <ChartBar data={chartBarData} />
            <ChartPie data={chartPieData} />
        </div>
    );
}
