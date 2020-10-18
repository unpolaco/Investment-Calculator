import React from 'react';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';

export const ProductsList = () => {
    return (
        <>
            <ProductsListContainer>
                <ProductItemCard risk="1" rating="3" />
                <ProductItemCard risk="3" rating="5" />
                <ProductItemCard risk="5" rating="2" />
                <ProductItemCard risk="2" rating="4" />
                <ProductItemCard risk="5" rating="1" />
                <ProductItemCard risk="1" rating="5" />
                <ProductItemCard risk="1" rating="3" />
                <ProductItemCard risk="4" rating="2" />
                <ProductItemCard risk="6" rating="5" />
                <ProductItemCard risk="3" rating="2" />
            </ProductsListContainer>
        </>
    );
};
