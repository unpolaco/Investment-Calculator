import React from 'react';
import {ResultCardContainer} from '../CalculatorPage/ResultsCard/ResultCard.styles';
import {ProductResultLineChart} from './ProductResultLineChart';
export const ProductCalculatedResultCard: React.FC<any> = ({calculatedInvPortfolio}) => {
    return (
        <ResultCardContainer>
            <ProductResultLineChart lineChartData={calculatedInvPortfolio} />
        </ResultCardContainer>
    );
};
