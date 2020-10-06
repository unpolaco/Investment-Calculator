import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CalculatorInputStartValue} from './CalculatorFormInputs/CalculatorInputStartValue';
import {CalculatorInputYearsContribution} from './CalculatorFormInputs/CalculatorInputYearsContribution';
import {CalculatorSelectFrequencyContribution} from './CalculatorFormInputs/CalculatorSelectFrequencyContribution';
import {CalculatorInputReturnRate} from './CalculatorFormInputs/CalculatorInputReturnRate';
import {CalculatorInputAdditionalContribution} from './CalculatorFormInputs/CalculatorInputAdditionalContribution';
import ResultCard from '../ResultsCard/ResultCard';

interface FormValues {
    startValue?: number;
    additionalContribution?: number;
    frequencyContribution?: number;
    yearsContribution?: number;
    returnRate?: number;
}
interface AnnualArray {
    year: number;
    startYearValue: number;
    annualInterest: number;
    annualContribution: number;
    cumulativeContribution: number;
    cumulativeInterest: number;
}
export default function CalculatorForm() {
    const [result, setResult] = useState(0);
    const [annualResult, setAnnualResult] = useState([
        {year: 2020, startYearValue: 0, annualInterest: 0, annualContribution: 0, cumulativeInterest: 0, cumulativeContribution: 0},
    ]);
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
            annualArray.push({year, startYearValue, annualInterest, annualContribution, cumulativeInterest, cumulativeContribution});
            ++year;
            startYearValue = startYearValue + annualInterest + annualContribution;
        }
        return annualArray;
    }
    const handleSubmit = (values: FormValues) => {
        const resultArray: AnnualArray[] = calculateValues(values);
        const resultValue: number = +resultArray[resultArray.length - 1].startYearValue.toFixed();
        setAnnualResult(resultArray);
        setResult(resultValue);
    };

    const initialValues: FormValues = {
        startValue: 1000,
        additionalContribution: 300,
        frequencyContribution: 12,
        yearsContribution: 15,
        returnRate: 4,
    };
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <CalculatorInputStartValue />
                        <CalculatorInputYearsContribution />
                        <CalculatorInputAdditionalContribution />
                        <CalculatorSelectFrequencyContribution />
                        <CalculatorInputReturnRate />
                        <button type="submit">Calculate</button>
                    </Form>
                )}
            </Formik>
            <p>Your total income will be {result} PLN</p>
            <ResultCard data={annualResult} />
        </>
    );
}
