export interface FormValues {
    startValue?: number;
    additionalContribution?: number;
    frequencyContribution?: number;
    yearsContribution?: number;
    returnRate?: number;
}
export interface AnnualArray {
    year: number;
    startValue: number;
    startYearValue: number;
    annualInterest: number;
    annualContribution: number;
    cumulativeContribution: number;
    cumulativeInterest: number;
    id: string;
    yearLabel: string;
}
export interface TotalArray {
    value: number;
    label: string;
    id: string;
}
