import React from 'react';
import {CartPanel} from './CartPanel';
import {ProductsList} from './ProductsList';

export const ProductsPage = () => {
    return (
        <>
            <CartPanel />
            <ProductsList />
        </>
    );
};
