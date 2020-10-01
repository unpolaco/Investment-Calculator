import React from 'react';
import {Field} from 'formik';

type FieldTextComponentProps = {
    name: string;
    labelText: string;
    values: string;
};

export default function FieldTextComponent({name, labelText, values}: FieldTextComponentProps) {
    return (
        <fieldset>
            <Field type="number" name={name} values={values} />
            <label htmlFor={name}>{labelText}</label>
        </fieldset>
    );
}
