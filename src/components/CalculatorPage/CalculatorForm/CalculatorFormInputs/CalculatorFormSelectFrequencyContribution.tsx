import React from 'react';
import {Field, useField} from 'formik';
import {Select, Label, Fieldset} from './CalculatorFormInputs.styles';

const dropdownOptions = [
    {key: 'Weekly', value: '52'},
    {key: 'Monthly', value: '12'},
    {key: 'Annually', value: '1'},
];

export const CalculatorSelectFrequencyContribution: React.FC = () => {
    const [field] = useField('frequencyContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Frequency Contribution</Label>
            <Field as={Select} id={field.name} name={field.name}>
                {dropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </Field>
        </Fieldset>
    );
};
