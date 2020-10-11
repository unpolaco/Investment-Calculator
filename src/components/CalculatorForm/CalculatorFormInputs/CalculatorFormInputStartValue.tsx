import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error} from './CalculatorFormInputs.styles';

export const CalculatorInputStartValue: React.FC = () => {
    const [field, meta] = useField('startValue');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Starting Amount</Label>
            <Field autoFocus type="number" as={Input} {...field} />
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
