import React from 'react';
import {Field, useField} from 'formik';

const dropdownOptions = [
    {key: 'Weekly', value: '52'},
    {key: 'Monthly', value: '12'},
    {key: 'Annually', value: '1'},
];

export const CalculatorSelectFrequencyContribution: React.FC = () => {
    const [field] = useField('frequencyContribution');
    return (
        <fieldset>
            <label htmlFor={field.name}>Frequency Contribution</label>
            <Field as="select" id={field.name} name={field.name}>
                {dropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </Field>
        </fieldset>
    );
};
