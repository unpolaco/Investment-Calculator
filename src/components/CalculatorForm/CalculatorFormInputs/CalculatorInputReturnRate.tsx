import React from 'react';
import {Field, useField} from 'formik';

export const CalculatorInputReturnRate: React.FC = () => {
    const [field] = useField('returnRate');
    return (
        <fieldset>
            <Field type="number" {...field} />
            <label htmlFor={field.name}>Expected Rate of Return</label>
        </fieldset>
    );
};
