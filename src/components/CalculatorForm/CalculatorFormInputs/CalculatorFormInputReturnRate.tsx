import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label} from './CalculatorFormInputs.styles';

export const CalculatorInputReturnRate: React.FC = () => {
    const [field] = useField('returnRate');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Expected Rate of Return</Label>
            <Field type="number" as={Input} {...field} />
        </Fieldset>
    );
};
