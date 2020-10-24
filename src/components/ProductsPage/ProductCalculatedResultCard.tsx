import React from 'react';
import {ResultCardContainer} from '../CalculatorPage/ResultsCard/ResultCard.styles';
import {ChartPie} from '../CalculatorPage/ResultsCard/ResultChartPie';
import {ProductResultLineChart} from './ProductResultLineChart';

export const ProductCalculatedResultCard: React.FC<any> = ({calculatedInvPortfolio}) => {
    return (
        <ResultCardContainer>
            <ProductResultLineChart lineChartData={calculatedInvPortfolio} />
            <ChartPie pieChartData={calculatedInvPortfolio} />
        </ResultCardContainer>
    );
};
