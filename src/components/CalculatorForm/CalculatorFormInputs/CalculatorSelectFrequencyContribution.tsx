import React from 'react';
import {Field} from 'formik';

const dropdownOptions = [
    {key: 'Weekly', value: '52'},
    {key: 'Monthly', value: '12'},
    {key: 'Annually', value: '1'},
];

export const CalculatorSelectFrequencyContribution: React.FC = () => {
    return (
        <fieldset>
            <label htmlFor="frequencyContribution">Frequency Contribution</label>
            <Field as="select" id="frequencyContribution" name="frequencyContribution">
                {dropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </Field>
        </fieldset>
    );
};
