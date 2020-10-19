import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error} from './CalculatorFormInputs.styles';

export const CalculatorInputYearsContribution: React.FC = () => {
    const [field, meta] = useField('yearsContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Years to Accumulate</Label>
            <Field type="number" as={Input} {...field} />
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
