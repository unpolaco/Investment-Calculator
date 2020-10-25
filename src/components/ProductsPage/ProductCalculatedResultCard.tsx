import React from 'react';
import {ResultCardContainer} from '../CalculatorPage/ResultsCard/ResultCard.styles';
import {ProductResultPieChart} from './ProductResultPieChart';
import {ProductResultLineChart} from './ProductResultLineChart';
import {ProductResultSummary} from './ProductResultSummary';

export const ProductCalculatedResultCard: React.FC<any> = ({calculatedInvPortfolio}) => {
    return (
        <ResultCardContainer>
            <ProductResultSummary calculatedInvPortfolio={calculatedInvPortfolio} />
            <ProductResultLineChart lineChartData={calculatedInvPortfolio} />
            <ProductResultPieChart pieChartData={calculatedInvPortfolio} />
        </ResultCardContainer>
    );
};
