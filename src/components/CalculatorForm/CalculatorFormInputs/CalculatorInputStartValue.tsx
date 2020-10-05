import React from 'react';
import {Field, useField} from 'formik';

export const CalculatorInputStartValue: React.FC = () => {
    const [field] = useField('startValue');
    return (
        <fieldset>
            <Field autoFocus type="number" {...field} />
            <label htmlFor={field.name}>Starting Amount</label>
        </fieldset>
    );
};
