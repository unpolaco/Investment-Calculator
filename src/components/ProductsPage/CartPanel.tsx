import React from 'react';
import {Formik, Form} from 'formik';
import {CartPanelContainer, EmptyCart} from './CartPanel.styles';
import {CartPanelProductItem} from './CartPanelIProductItem';

export const CartPanel: React.FC<any> = ({selectedProducts}) => {
    const calculatePercentageQuota = (values: any) => {};

    const handleSubmit = (values: any) => {
        console.log(values);
        console.log(selectedProducts);
        // return values;
        const calculate = selectedProducts.map((product: any) => {});
    };
    return (
        <CartPanelContainer>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                {({handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit}>
                        <EmptyCart>
                            {selectedProducts.length === 0 ? (
                                'Click on the list on the right side to add product to the cart'
                            ) : (
                                <ul>
                                    {selectedProducts.map((product: any) => (
                                        <CartPanelProductItem key={product.id} name={product.name} id={product.id} />
                                    ))}
                                </ul>
                            )}
                        </EmptyCart>
                        <button type="submit">Save your values</button>
                    </Form>
                )}
            </Formik>
        </CartPanelContainer>
    );
};
