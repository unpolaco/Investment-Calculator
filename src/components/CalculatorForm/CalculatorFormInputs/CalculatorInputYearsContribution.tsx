import React from 'react';
import {Field} from 'formik';

export const CalculatorInputYearsContribution: React.FC = () => {
    return (
        <fieldset>
            <Field type="number" name="yearsContribution" />
            <label htmlFor="yearsContribution">Years to Accumulate</label>
        </fieldset>
    );
};
