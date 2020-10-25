import React from 'react';
import {Field} from 'formik';
import {Input, Fieldset, FieldWrapper, PercentQuota, ProductName, FieldContainerCurrency} from './CartPanelProductItem.styles';

export const CartPanelProductItem: React.FC<any> = ({name, id, handleBlur, calculateProducts, values, percentQuota}) => {
    return (
        <div key={id}>
            <Fieldset>
                <ProductName>{name}</ProductName>
                <FieldWrapper>
                    <FieldContainerCurrency>
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
                    </FieldContainerCurrency>
                    <PercentQuota>/ {percentQuota || 0}%</PercentQuota>
                </FieldWrapper>
            </Fieldset>
        </div>
    );
};
