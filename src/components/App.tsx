import React from 'react';
import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {ProductsPage} from './ProductsPage/ProductsPage';
import {Main} from './App.styles';
import {Header} from './Header/Header';
export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <CalculatorForm />
                <ProductsPage />
            </Main>
        </>
    );
};
