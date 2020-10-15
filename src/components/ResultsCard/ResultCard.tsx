import React, {useState, useEffect} from 'react';
import {ChartBar} from './ResultChartBar';
import {ChartPie} from './ResultChartPie';
import {ResultCardContainer, TextResult, TextBold} from './ResultCard.styles';
import {FormValues, AnnualArray, TotalArray} from '../CalculatorForm/CalculatorFrom.types';

export const ResultCard = ({inputValues}: any) => {
    const [result, setResult] = useState(0);
    let annualResult = [];
    let totalResult = [];
    const formattedResult = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(result);
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

    const resultArray: AnnualArray[] = calculateValues(inputValues);
    const totalValues: TotalArray[] = getTotals(resultArray);
    const resultValue: number = +resultArray[resultArray.length - 1].startYearValue.toFixed();
    const finishYear: number = resultArray[resultArray.length - 1].year;
    annualResult = resultArray;
    totalResult = totalValues;

    useEffect(() => {
        setResult(resultValue);
    }, [resultValue]);

    return (
        <ResultCardContainer>
            <TextResult>
                Your total income in <TextBold>{finishYear}</TextBold> will be <TextBold>{formattedResult}</TextBold>
            </TextResult>
            <ChartBar data={annualResult} />
            <ChartPie data={totalResult} />
        </ResultCardContainer>
    );
};
