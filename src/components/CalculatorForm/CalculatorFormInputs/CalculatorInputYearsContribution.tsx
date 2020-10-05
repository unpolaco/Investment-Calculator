import React from 'react';
import {Field, useField} from 'formik';

export const CalculatorInputYearsContribution: React.FC = () => {
    const [field] = useField('yearsContribution');
    return (
        <fieldset>
            <Field type="number" {...field} />
            <label htmlFor={field.name}>Years to Accumulate</label>
        </fieldset>
    );
};
