import React from 'react';
import {ProductsPage} from './ProductsPage/ProductsPage';
import {Main} from './App.styles';
import {Header} from './Header/Header';
export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <ProductsPage />
            </Main>
        </>
    );
};
