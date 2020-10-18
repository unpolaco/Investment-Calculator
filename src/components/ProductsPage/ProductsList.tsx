import React from 'react';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';

export const ProductsList = () => {
    return (
        <>
            <ProductsListContainer>
                <ProductItemCard risk="1" />
                <ProductItemCard risk="3" />
                <ProductItemCard risk="5" />
                <ProductItemCard risk="2" />
                <ProductItemCard risk="5" />
                <ProductItemCard risk="1" />
                <ProductItemCard risk="1" />
                <ProductItemCard risk="4" />
                <ProductItemCard risk="6" />
                <ProductItemCard risk="3" />
            </ProductsListContainer>
        </>
    );
};
