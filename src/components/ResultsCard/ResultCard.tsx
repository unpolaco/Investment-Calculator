import React from 'react';
import {ChartBar} from './ResultChartBar';
import {ChartPie} from './ResultChartPie';
import {ResultCardContainer} from './ResultCard.styles';

export const ResultCard = ({chartBarData, chartPieData}: any) => {
    return (
        <ResultCardContainer>
            <ChartBar data={chartBarData} />
            <ChartPie data={chartPieData} />
        </ResultCardContainer>
    );
};
