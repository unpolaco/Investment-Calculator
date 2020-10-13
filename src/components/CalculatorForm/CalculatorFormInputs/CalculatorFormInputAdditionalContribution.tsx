import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error, FieldContainerCurrency} from './CalculatorFormInputs.styles';

export const CalculatorInputAdditionalContribution: React.FC = () => {
    const [field, meta] = useField('additionalContribution');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Additional Contribution</Label>
            <FieldContainerCurrency>
                <Field type="number" as={Input} {...field} />
            </FieldContainerCurrency>
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
