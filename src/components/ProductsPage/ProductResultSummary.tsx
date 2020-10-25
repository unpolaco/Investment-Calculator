import React from 'react';
import {ProductResultSummaryContainer, Title} from './ProductResultSummary.styles';
import {ProductSummaryCard} from './ProductSummaryCard';

export const ProductResultSummary: React.FC<any> = ({calculatedInvPortfolio}) => {
    const selectedProducts = calculatedInvPortfolio.investmentList;

    return (
        <ProductResultSummaryContainer>
            <Title>Yours products:</Title>
            {selectedProducts.map((product: any) => (
                <div key={product.id}>
                    <ProductSummaryCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        amount={product.amount}
                        risk={product.risk}
                        rating={product.rating}
                        rate={product.rate}
                        category={product.category}
                    />
                </div>
            ))}
        </ProductResultSummaryContainer>
    );
};
