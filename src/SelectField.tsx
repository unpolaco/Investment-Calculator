import React from 'react';
import {Field} from 'formik';

type SelectFieldProps = {
    name: string;
    label: string;
    options: any;
};

export default function SelectField({label, name, options}: SelectFieldProps) {
    return (
        <fieldset>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name}>
                {options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </Field>
        </fieldset>
    );
}
