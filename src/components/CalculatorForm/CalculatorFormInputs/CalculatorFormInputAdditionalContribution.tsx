import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label} from './CalculatorFormInputs.styles';

export const CalculatorInputAdditionalContribution: React.FC = () => {
    const [field] = useField('additionalContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Additional Contribution</Label>
            <Field type="number" as={Input} {...field} />
        </Fieldset>
    );
};
