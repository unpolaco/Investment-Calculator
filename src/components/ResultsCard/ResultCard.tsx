import React from 'react';
import {ChartBar} from './ResultChartBar';

export default function ResultCard({data}: any) {
    return (
        <div style={{height: '200px'}}>
            <ChartBar data={data} />
        </div>
    );
}
