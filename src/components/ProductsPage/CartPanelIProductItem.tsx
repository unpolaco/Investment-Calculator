import React from 'react';
import {Field} from 'formik';
import {Input, Label, Fieldset} from './CartPanelProductItem.styles';

export const CartPanelProductItem: React.FC<any> = ({name, id, handleBlur, calculateProducts, values}) => {
    return (
        <div key={id}>
            <Fieldset>
                {name}
                <Label>Enter amount</Label>
                <Field
                    autoFocus
                    autoComplete="off"
                    type="number"
                    as={Input}
                    name={name}
                    value={values.name}
                    onBlur={(e: any) => {
                        handleBlur(e);
                        calculateProducts(values);
                    }}
                />
            </Fieldset>
        </div>
    );
};
