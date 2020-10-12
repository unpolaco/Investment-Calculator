import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error} from './CalculatorFormInputs.styles';

export const CalculatorInputAdditionalContribution: React.FC = () => {
    const [field, meta] = useField('additionalContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Additional Contribution</Label>
            <Field type="number" as={Input} {...field} />
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
