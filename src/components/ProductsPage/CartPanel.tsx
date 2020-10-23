import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CartPanelContainer, EmptyCart, Button} from './CartPanel.styles';
import {CartPanelProductItem} from './CartPanelIProductItem';
import {addAmountsToSelectedProducts, calculatePercentageQuota} from './CartPanel.helpers';

export const CartPanel: React.FC<any> = ({selectedProducts}) => {
    const [totalAmount, setTotalAmount] = useState(0);

    function handleSubmit(values: any) {
        let calculatedTotalAmount = 0;
        addAmountsToSelectedProducts(selectedProducts, values);
        selectedProducts.map((product: any) => {
            for (let i = 0; i < selectedProducts.length; i++) {
                calculatedTotalAmount = calculatedTotalAmount + product.amount;
                return calculatedTotalAmount;
            }
            return calculatedTotalAmount;
        });
        calculatePercentageQuota(selectedProducts, calculatedTotalAmount);
        setTotalAmount(calculatedTotalAmount);
    }
    const formattedTotalAmount = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(totalAmount);

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
