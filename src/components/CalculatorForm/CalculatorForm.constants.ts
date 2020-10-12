import {FormValues} from './CalculatorFrom.types';

export const initialValues: FormValues = {
    startValue: 10000,
    additionalContribution: 300,
    frequencyContribution: 12,
    yearsContribution: 10,
    returnRate: 4,
};

export const validate = (values: any) => {
    const errors: any = {};

    if (values.startValue < 0) {
        errors.startValue = 'Must be a positive number';
    }

    if (values.additionalContribution < 0) {
        errors.additionalContribution = 'Must be a positive number';
    }

    if (!values.yearsContribution) {
        errors.yearsContribution = 'Required field';
    } else if (values.yearsContribution < 0) {
        errors.yearsContribution = 'Must be a positive number';
    } else if (values.yearsContribution > 100) {
        errors.yearsContribution = 'You are trying to look too far ahead!';
    }

    if (!values.returnRate) {
        errors.returnRate = 'Required field';
    } else if (values.returnRate < 0) {
        errors.returnRate = 'Why so pesimistic?';
    } else if (values.returnRate > 50) {
        errors.returnRate = 'You are too optimistic!';
    }

    return errors;
};
