import React from 'react';
import {Formik, Form} from 'formik';
import {CartPanelContainer, EmptyCart, Button} from './CartPanel.styles';
import {CartPanelProductItem} from './CartPanelIProductItem';

export const CartPanel: React.FC<any> = ({selectedProducts}) => {
    function addAmountsToSelectedProducts(values: any) {
        selectedProducts = selectedProducts.map((product: any) => {
            product.amount = values[product.name];
            return product;
        });
    }
    function calculatePercentageQuota() {
        selectedProducts = selectedProducts.map((product: any) => {
            product.percentQuota = (product.amount / totalAmount) * 100;
            return product;
        });
    }
    function handleSubmit(values: any) {
        totalAmount = 0;
        addAmountsToSelectedProducts(values);
        selectedProducts.map((product: any) => {
            for (let i = 0; i < selectedProducts.length; i++) {
                totalAmount = totalAmount + product.amount;
                return totalAmount;
            }
            return totalAmount;
        });
        calculatePercentageQuota();
        formattedTotalAmount = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(totalAmount);
    }
    let totalAmount = 0;
    let formattedTotalAmount = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(totalAmount);

    return (
        <CartPanelContainer>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                {({handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit}>
                        <div>Your total amount is {formattedTotalAmount}</div>
                        <EmptyCart>
                            {selectedProducts.length === 0 ? (
                                'Click on the list on the right side to add product to the cart'
                            ) : (
                                <ul>
                                    {selectedProducts.map((product: any) => (
                                        <>
                                            <div>{product.percentQuota}</div>
                                            <CartPanelProductItem key={product.id} name={product.name} id={product.id} />
                                        </>
                                    ))}
                                </ul>
                            )}
                        </EmptyCart>
                        <Button type="submit">Save your values</Button>
                    </Form>
                )}
            </Formik>
        </CartPanelContainer>
    );
};
