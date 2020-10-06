import React from 'react';
import CalculatorForm from './CalculatorForm/CalculatorForm';
import {LogInForm} from './Header/LogInForm';
import {SignUpForm} from './Header/SignUpForm';

export const App = () => {
    return (
        <>
            <header>
                <h3>Solid Investment Calculator!</h3>
                <p>Welcome stranger!</p>
                <LogInForm />
                <SignUpForm />
            </header>
            <CalculatorForm />
        </>
    );
};
