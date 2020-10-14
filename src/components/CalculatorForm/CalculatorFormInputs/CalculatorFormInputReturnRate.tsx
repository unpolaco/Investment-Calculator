import React from 'react';
import {Field, useField} from 'formik';
import {Input, Fieldset, Label, Error, FieldContainerPercent} from './CalculatorFormInputs.styles';

export const CalculatorInputReturnRate: React.FC = () => {
    const [field, meta] = useField('returnRate');
    return (
        <Fieldset>
            <Label htmlFor={field.name}>Expected Rate of Return</Label>
            <FieldContainerPercent>
                <Field type="number" as={Input} {...field} />
            </FieldContainerPercent>
            {meta.error && <Error>{meta.error}</Error>}
        </Fieldset>
    );
};
