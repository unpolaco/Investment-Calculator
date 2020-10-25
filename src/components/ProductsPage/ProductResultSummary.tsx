import React from 'react';
import {ProductResultSummaryContainer} from './ProductResultSummary.styles';
import {ProductSummaryCard} from './ProductSummaryCard';

export const ProductResultSummary: React.FC<any> = ({calculatedInvPortfolio}) => {
    const selectedProducts = calculatedInvPortfolio.investmentList;

    return (
        <ProductResultSummaryContainer>
            Yours products:
            {selectedProducts.map((product: any) => (
                <div key={product.id}>
                    <ProductSummaryCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        value={product.value}
                        risk={product.risk}
                        rating={product.rating}
                        rate={product.rate}
                        category={product.category}
                    />
                </div>
            ))}
            <div></div>
        </ProductResultSummaryContainer>
    );
};
