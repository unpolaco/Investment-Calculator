import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CalculatorInputStartValue} from './CalculatorFormInputs/CalculatorFormInputStartValue';
import {CalculatorInputYearsContribution} from './CalculatorFormInputs/CalculatorFormInputYearsContribution';
import {CalculatorSelectFrequencyContribution} from './CalculatorFormInputs/CalculatorFormSelectFrequencyContribution';
import {CalculatorInputReturnRate} from './CalculatorFormInputs/CalculatorFormInputReturnRate';
import {CalculatorInputAdditionalContribution} from './CalculatorFormInputs/CalculatorFormInputAdditionalContribution';
import {ResultCard} from '../ResultsCard/ResultCard';
import {InputsCard, FormContainer, Button} from './CalculatorForm.styles';
import {FormValues} from './CalculatorFrom.types';
import {initialValues, validate} from './CalculatorForm.constants';

export const CalculatorForm = () => {
    const [inputValues, setInputValues] = useState(initialValues);

    const handleSubmit = (values: FormValues) => {
        setInputValues(values);
    };

    return (
        <>
            <InputsCard>
                <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                    {({handleSubmit, values}) => (
                        <Form onSubmit={handleSubmit}>
                            <FormContainer>
                                <CalculatorInputStartValue />
                                <CalculatorInputYearsContribution />
                                <CalculatorInputAdditionalContribution />
                                <CalculatorSelectFrequencyContribution />
                                <CalculatorInputReturnRate />
                                <Button type="submit">Calculate</Button>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </InputsCard>
            <ResultCard inputValues={inputValues} />
        </>
    );
};
