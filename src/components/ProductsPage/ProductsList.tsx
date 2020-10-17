import React from 'react';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';

export const ProductsList = () => {
    return (
        <>
            <ProductsListContainer>
                <ProductItemCard />
            </ProductsListContainer>
        </>
    );
};
