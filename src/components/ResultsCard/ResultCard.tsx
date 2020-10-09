import React from 'react';
import {ChartBar} from './ResultChartBar';
import {ChartPie} from './ResultChartPie';
import {ResultCardContainer, TextResult, TextBold} from './ResultCard.styles';

export const ResultCard = ({result, chartBarData, chartPieData}: any) => {
    return (
        <ResultCardContainer>
            <TextResult>
                Your total income will be <TextBold>{result} PLN</TextBold>
            </TextResult>
            <ChartBar data={chartBarData} />
            <ChartPie data={chartPieData} />
        </ResultCardContainer>
    );
};
