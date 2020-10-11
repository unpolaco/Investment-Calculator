import React, {useState, useEffect} from 'react';
import {Formik, Form} from 'formik';
import {CalculatorInputStartValue} from './CalculatorFormInputs/CalculatorFormInputStartValue';
import {CalculatorInputYearsContribution} from './CalculatorFormInputs/CalculatorFormInputYearsContribution';
import {CalculatorSelectFrequencyContribution} from './CalculatorFormInputs/CalculatorFormSelectFrequencyContribution';
import {CalculatorInputReturnRate} from './CalculatorFormInputs/CalculatorFormInputReturnRate';
import {CalculatorInputAdditionalContribution} from './CalculatorFormInputs/CalculatorFormInputAdditionalContribution';
import {ResultCard} from '../ResultsCard/ResultCard';
import {InputsCard, FormContainer, Button} from './CalculatorForm.styles';
import {FormValues, AnnualArray, TotalArray} from './CalculatorFrom.types';
import {initialValues, validate} from './CalculatorForm.constants';

export const CalculatorForm = () => {
    const [inputValues, setInputValues] = useState({});
    const [result, setResult] = useState(0);
    const [annualResult, setAnnualResult] = useState([
        {
            year: 2020,
            id: '2020',
            startYearValue: 10000,
            annualInterest: 300,
            annualContribution: 12,
            cumulativeInterest: 100,
            cumulativeContribution: 100,
            yearLabel: '2020',
        },
    ]);
    const [totalResult, setTotalResult] = useState([
        {id: 'Starting Amount', value: 122, label: 'Starting Amount'},
        {id: 'Total Contributions', value: 34, label: 'Total Contributions'},
        {id: 'Total Growth', value: 50, label: 'Total Growth'},
    ]);
    useEffect(() => {
        handleSubmit(initialValues);
    }, []);
    const postUrl = 'https://user-service.kale-team.sit.fintechchallenge.pl/api/calculations';
    const bodyContent = inputValues;
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
            const id = yearLabel;
            annualArray.push({
                year,
                id,
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
    function getTotals(resultArray: AnnualArray[]) {
        const totalStartValue = resultArray[0].startYearValue;
        const totalContribution = resultArray[resultArray.length - 1].cumulativeContribution;
        const totalInterest = resultArray[resultArray.length - 1].cumulativeInterest;
        const totalArray = [
            {id: 'Starting Amount', value: totalStartValue, label: 'Starting Amount'},
            {id: 'Total Contributions', value: totalContribution, label: 'Total Contributions'},
            {id: 'Total Growth', value: totalInterest, label: 'Total Growth'},
        ];
        return totalArray;
    }
    const handleSubmit = (values: FormValues) => {
        const resultArray: AnnualArray[] = calculateValues(values);
        const totalValues: TotalArray[] = getTotals(resultArray);
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
            .then(response => response)
            .catch(error => console.error(error));
    };

    return (
        <>
            <InputsCard>
                <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
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
