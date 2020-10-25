import React from 'react';
import {ResultCardContainer, Button, Wrapper, PieChartWrapper} from '../CalculatorPage/ResultsCard/ProductCalculatedResultCard.styles';
import {ProductResultPieChart} from './ProductResultPieChart';
import {ProductResultLineChart} from './ProductResultLineChart';
import {ProductResultSummary} from './ProductResultSummary';

export const ProductCalculatedResultCard: React.FC<any> = ({calculatedInvPortfolio}) => {
    return (
        <ResultCardContainer>
            <Button>Go back</Button>
            <Wrapper>
                <ProductResultSummary calculatedInvPortfolio={calculatedInvPortfolio} />
                <PieChartWrapper>
                    <ProductResultPieChart pieChartData={calculatedInvPortfolio} />
                </PieChartWrapper>
            </Wrapper>
            <ProductResultLineChart lineChartData={calculatedInvPortfolio} />
        </ResultCardContainer>
    );
};
