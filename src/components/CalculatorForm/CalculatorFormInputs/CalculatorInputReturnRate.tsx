import React from 'react';
import {Field} from 'formik';

export const CalculatorInputReturnRate: React.FC = () => {
    return (
        <fieldset>
            <Field type="number" name="returnRate" />
            <label htmlFor="returnRate">Expected Rate of Return</label>
        </fieldset>
    );
};
