import React from 'react';
import {Field} from 'formik';

type FieldTextComponentProps = {
    name: string;
    label: string;
    value: any;
};

export default function FieldTextComponent({name, value, label}: FieldTextComponentProps) {
    return (
        <fieldset>
            <Field type="number" name={name} value={value} />
            <label htmlFor={name}>{label}</label>
        </fieldset>
    );
}
