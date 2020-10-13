import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error, FieldContainerCurrency} from './CalculatorFormInputs.styles';

export const CalculatorInputStartValue: React.FC = () => {
    const [field, meta] = useField('startValue');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Starting Amount</Label>
            <FieldContainerCurrency>
                <Field autoFocus type="number" as={Input} {...field} />
            </FieldContainerCurrency>
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
