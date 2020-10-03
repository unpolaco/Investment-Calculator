import React from 'react';
import {Field} from 'formik';

export const CalculatorInputAdditionalContribution: React.FC = () => {
    return (
        <fieldset>
            <Field type="number" name="additionalContribution" />
            <label htmlFor="additionalContribution">Additional Contribution</label>
        </fieldset>
    );
};
