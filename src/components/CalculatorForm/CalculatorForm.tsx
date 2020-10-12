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
    const postUrl = '/api/calculations';
    const bodyContent = inputValues;
    const postOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyContent),
    };

    const handleSubmit = (values: FormValues) => setInputValues(values);

    const handleResponse = (response: any) => {
        if (response.status === 404) {
            return Promise.reject(response);
        }
        return response.json();
    };
    const handleSave = (values: FormValues) => {
        handleSubmit(values);
        fetch(postUrl, postOptions)
            .then(handleResponse)
            .then(response => response)
            .catch(error => console.error(error));
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
                                <Button type="submit" onClick={() => handleSave(values)}>
                                    Save
                                </Button>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </InputsCard>
            <ResultCard inputValues={inputValues} />
        </>
    );
};
