import React from 'react';
import {ChartBar} from './ResultChartBar';
import {ChartPie} from './ResultChartPie';
import {ResultCardContainer, TextResult, TextBold} from './ResultCard.styles';

export const ResultCard = ({result, chartBarData, chartPieData}: any) => {
    const formattedResult = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(result);

    return (
        <ResultCardContainer>
            <TextResult>
                Your total income will be <TextBold>{formattedResult}</TextBold>
            </TextResult>
            <ChartBar data={chartBarData} />
            <ChartPie data={chartPieData} />
        </ResultCardContainer>
    );
};
