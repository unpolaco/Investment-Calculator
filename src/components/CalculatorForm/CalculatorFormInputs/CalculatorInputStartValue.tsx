import React from 'react';
import {Field} from 'formik';

export const CalculatorInputStartValue: React.FC = () => {
    return (
        <fieldset>
            <Field autoFocus type="number" name="startValue" />
            <label htmlFor="startValue">Starting Amount</label>
        </fieldset>
    );
};
