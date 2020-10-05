import React from 'react';
import {Field, useField} from 'formik';

export const CalculatorInputAdditionalContribution: React.FC = () => {
    const [field] = useField('additionalContribution');
    return (
        <fieldset>
            <Field type="number" {...field} />
            <label htmlFor={field.name}>Additional Contribution</label>
        </fieldset>
    );
};
