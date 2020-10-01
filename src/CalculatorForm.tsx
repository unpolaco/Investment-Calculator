import React from 'react';
import {Formik, Form} from 'formik';
import FieldTextComponent from './FieldTextComponent';
import fields from './assets/FormFieldsData';
import SelectField from './SelectField';

interface FormValues {
    [name: string]: string;
}
export default function CalculatorForm() {
    const annualIncome: any = [];

    const dropdownOptions = [
        {key: 'Weekly', value: '52'},
        {key: 'Monthly', value: '12'},
        {key: 'Annually', value: '1'},
    ];

    const handleSubmit = (values: any) => {
        const {startValue, additionalContribution, frequencyContribution, yearsContribution, returnRate} = values;
        let startYearValue = startValue;
        annualIncome.length = 0;
        for (let i = 0; i <= yearsContribution; i++) {
            const annualInterest = ((startYearValue + additionalContribution * frequencyContribution) * returnRate) / 100;
            const totalContribution = additionalContribution * frequencyContribution;
            annualIncome.push({startYearValue, annualInterest, totalContribution});
            startYearValue = startYearValue + annualInterest + totalContribution;
            startYearValue.toFixed(2);
        }
        console.log(annualIncome);
    };

    const initialValues: FormValues = {};
    fields.forEach(field => {
        const key = field.name;
        initialValues[key] = '';
    });
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit}>
                        {fields.map((field, index) =>
                            field.name === 'frequencyContribution' ? (
                                <SelectField name={field.name} label={field.label} key={field.name} options={dropdownOptions} />
                            ) : (
                                <FieldTextComponent name={field.name} label={field.label} value={values[index]} key={field.name} />
                            ),
                        )}
                        <button type="submit">Calculate</button>
                    </Form>
                )}
            </Formik>
            <p>{annualIncome[annualIncome.length - 1]?.startYearValue === 'undefined' || 0}</p>
        </>
    );
}
