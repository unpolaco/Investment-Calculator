import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label} from './Inputs.styles';

export const CalculatorInputYearsContribution: React.FC = () => {
    const [field] = useField('yearsContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Years to Accumulate</Label>
            <Field type="number" as={Input} {...field} />
        </Fieldset>
    );
};
