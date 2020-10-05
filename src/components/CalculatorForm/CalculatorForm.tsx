import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CalculatorInputStartValue} from './CalculatorFormInputs/CalculatorInputStartValue';
import {CalculatorInputYearsContribution} from './CalculatorFormInputs/CalculatorInputYearsContribution';
import {CalculatorSelectFrequencyContribution} from './CalculatorFormInputs/CalculatorSelectFrequencyContribution';
import {CalculatorInputReturnRate} from './CalculatorFormInputs/CalculatorInputReturnRate';
import {CalculatorInputAdditionalContribution} from './CalculatorFormInputs/CalculatorInputAdditionalContribution';

interface FormValues {
    startValue?: number;
    additionalContribution?: number;
    frequencyContribution?: number;
    yearsContribution?: number;
    returnRate?: number;
}
interface AnnualIncome {
    startYearValue: number;
    annualInterest: number;
    totalContribution: number;
}

export default function CalculatorForm() {
    const [result, setResult] = useState(0);

    function calculateValues({
        startValue = 0,
        additionalContribution = 0,
        frequencyContribution = 0,
        yearsContribution = 0,
        returnRate = 0,
    }: FormValues) {
        const annualIncome: AnnualIncome[] = [];
        let startYearValue = startValue;
        for (let i = 0; i <= yearsContribution; i++) {
            const annualInterest = ((startYearValue + additionalContribution * frequencyContribution) * returnRate) / 100;
            const totalContribution = additionalContribution * frequencyContribution;
            annualIncome.push({startYearValue, annualInterest, totalContribution});
            startYearValue = startYearValue + annualInterest + totalContribution;
        }
        return annualIncome;
    }

    const handleSubmit = (values: FormValues) => {
        const resultArray: AnnualIncome[] = calculateValues(values);
        const resultValue: number = +resultArray[resultArray.length - 1].startYearValue.toFixed();
        setResult(resultValue);
    };

    const initialValues: FormValues = {};
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
        </>
    );
}
