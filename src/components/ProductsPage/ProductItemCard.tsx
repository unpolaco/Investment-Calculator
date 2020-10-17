import React from 'react';
import {ProductItemContainer} from './ProductItemCard.styles';

export const ProductItemCard = () => {
    return (
        <>
            <ProductItemContainer>
                <div>Name</div>
                <div>Category</div>
                <div>rating 1/10</div>
                <div>risk 2/10</div>
                <div>av return 12%</div>
            </ProductItemContainer>
        </>
    );
};
