import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CalculatorInputStartValue} from './CalculatorFormInputs/CalculatorInputStartValue';
import {CalculatorInputYearsContribution} from './CalculatorFormInputs/CalculatorInputYearsContribution';
import {CalculatorSelectFrequencyContribution} from './CalculatorFormInputs/CalculatorSelectFrequencyContribution';
import {CalculatorInputReturnRate} from './CalculatorFormInputs/CalculatorInputReturnRate';
import {CalculatorInputAdditionalContribution} from './CalculatorFormInputs/CalculatorInputAdditionalContribution';
import {ResultCard} from '../ResultsCard/ResultCard';
import {InputsCard, FormContainer, Button} from './CalculatorForm.styles';
import {FormValues, AnnualArray, TotalArray} from './CalculatorFrom.types';
import {initialValues} from './CalculatorForm.constants';

export const CalculatorForm = () => {
    const [inputValues, setInputValues] = useState({});
    const [result, setResult] = useState(0);
    const [annualResult, setAnnualResult] = useState([
        {year: 2020, startYearValue: 0, annualInterest: 0, annualContribution: 0, cumulativeInterest: 0, cumulativeContribution: 0},
    ]);
    const [totalResult, setTotalResult] = useState([
        {value: 0, label: 'Starting Amount'},
        {value: 0, label: 'Total Contributions'},
        {value: 0, label: 'Total Growth'},
    ]);
    const postUrl = 'https://user-service.kale-team.sit.fintechchallenge.pl/api/calculations';
    const bodyContent = {
        startValue: 0,
        additionalContribution: 0,
        frequencyContribution: 0,
        yearsContribution: 0,
        returnRate: 0,
    };
    const postOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyContent),
    };

    function calculateValues({
        startValue = 0,
        additionalContribution = 0,
        frequencyContribution = 0,
        yearsContribution = 0,
        returnRate = 0,
    }: FormValues) {
        const annualArray: AnnualArray[] = [];
        const today = new Date();
        let year: number = today.getFullYear();
        let startYearValue = startValue;
        for (let i = 0; i <= yearsContribution; i++) {
            const annualInterest = ((startYearValue + additionalContribution * frequencyContribution) * returnRate) / 100;
            const annualContribution = additionalContribution * frequencyContribution;
            const cumulativeInterest = i === 0 ? 0 : annualArray[i - 1].cumulativeInterest + annualInterest;
            const cumulativeContribution = i * annualContribution;
            const yearLabel = year.toString();
            annualArray.push({
                year,
                startValue,
                startYearValue,
                annualInterest,
                annualContribution,
                cumulativeInterest,
                cumulativeContribution,
                yearLabel,
            });
            ++year;
            startYearValue = startYearValue + annualInterest + annualContribution;
        }
        return annualArray;
    }
    function calculateTotals(array: AnnualArray[]) {
        const totalStartValue = array[0].startYearValue;
        const totalContribution = array[array.length - 1].cumulativeContribution;
        const totalInterest = array[array.length - 1].cumulativeInterest;
        const totalArray = [
            {id: 'Starting Amount', value: totalStartValue, label: 'Starting Amount'},
            {id: 'Total Contributions', value: totalContribution, label: 'Total Contributions'},
            {id: 'Total Growth', value: totalInterest, label: 'Total Growth'},
        ];
        return totalArray;
    }
    const handleSubmit = (values: FormValues) => {
        const resultArray: AnnualArray[] = calculateValues(values);
        const totalValues: TotalArray[] = calculateTotals(resultArray);
        const resultValue: number = +resultArray[resultArray.length - 1].startYearValue.toFixed();
        setInputValues(values);
        setResult(resultValue);
        setAnnualResult(resultArray);
        setTotalResult(totalValues);
    };

    const handleResponse = (response: any) => {
        if (response.status === 404) {
            return Promise.reject(response);
        }
        return response.json();
    };

    const handleSave = () => {
        handleSubmit(inputValues);
        fetch(postUrl, postOptions)
            .then(handleResponse)
            .then(response => {
                return response;
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <InputsCard>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <FormContainer>
                                <CalculatorInputStartValue />
                                <CalculatorInputYearsContribution />
                                <CalculatorInputAdditionalContribution />
                                <CalculatorSelectFrequencyContribution />
                                <CalculatorInputReturnRate />
                                <Button type="submit">Calculate</Button>
                                <Button type="submit" onClick={() => handleSave()}>
                                    Save
                                </Button>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </InputsCard>
            <ResultCard result={result} chartBarData={annualResult} chartPieData={totalResult} />
        </>
    );
};
