import React from 'react';
import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {Main} from './App.styles';
import {Header} from './Header/Header';
export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <CalculatorForm />
            </Main>
        </>
    );
};
