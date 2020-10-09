import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label} from './Inputs.styles';

export const CalculatorInputStartValue: React.FC = () => {
    const [field] = useField('startValue');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Starting Amount</Label>
            <Field autoFocus type="number" as={Input} {...field} />
        </Fieldset>
    );
};
