import React from 'react';
import {Field} from 'formik';

type FieldTextComponentProps = {
    name: string;
    labelText: string;
    value: any;
};

export default function FieldTextComponent({name, value, labelText}: FieldTextComponentProps) {
    return (
        <fieldset>
            <Field type="number" name={name} value={value} />
            <label htmlFor={name}>{labelText}</label>
        </fieldset>
    );
}
