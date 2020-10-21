import React from 'react';
import {Field, useField} from 'formik';
import {Input, Label, Error, Fieldset} from './CartPanelProductItem.styles';

export const CartPanelProductItem: React.FC<any> = ({name, id}) => {
    const [field, meta] = useField(name);
    return (
        <>
            <li key={id}>
                {name}
                <Fieldset>
                    <Label>Enter amount</Label>
                    <Field autoFocus type="number" as={Input} {...field} />
                    {meta.error && <Error>{meta.error}</Error>}
                </Fieldset>
            </li>
        </>
    );
};
