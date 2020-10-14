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
import {useSaveCalculatorValues} from '../../hooks/useSaveCalculatorValues';
import {Loader} from '../Loader/Loader';

export const CalculatorForm = () => {
    const [inputValues, setInputValues] = useState(initialValues);
    const {isFetching, isError, responseLink, saveValues} = useSaveCalculatorValues();

    const handleSubmit = (values: FormValues) => {
        setInputValues(values);
    };

    const handleSave = (values: FormValues) => {
        setInputValues(values);
        saveValues(values);
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
                                {isError ? <div>Error occured</div> : null}
                                {isFetching ? <Loader /> : null}
                                {responseLink?.status === 200 ? <div>Your data was saved here:</div> : null}
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </InputsCard>
            <ResultCard inputValues={inputValues} />
        </>
    );
};
