import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CartPanelContainer, EmptyCart, Button} from './CartPanel.styles';
import {CartPanelProductItem} from './CartPanelIProductItem';
import {addAmountsToSelectedProducts, calculatePercentageQuota} from './CartPanel.helpers';
import {initialValues} from '../CalculatorPage/CalculatorForm/CalculatorForm.constants';

export const CartPanel: React.FC<any> = ({selectedProducts, handleSendProducts}) => {
    const [totalAmount, setTotalAmount] = useState(0);

    function calculateProducts(values: any) {
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
    function handleSubmit(values: any) {
        calculateProducts(values);
        handleSendProducts(selectedProducts);
    }
    const formattedTotalAmount = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(totalAmount);

    return (
        <CartPanelContainer>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleBlur}) => (
                    <Form onSubmit={handleSubmit}>
                        <div>Your total amount is {formattedTotalAmount}</div>
                        <EmptyCart>
                            {selectedProducts.length === 0 ? (
                                'Click on the list on the right side to add product to the cart'
                            ) : (
                                <div>
                                    <div>Enter amount on each product</div>
                                    {selectedProducts.map((product: any) => (
                                        <div key={product.id}>
                                            <div>{product.percentQuota}</div>
                                            <CartPanelProductItem
                                                key={product.id}
                                                name={product.name}
                                                id={product.id}
                                                handleBlur={handleBlur}
                                                calculateProducts={calculateProducts}
                                                values={values}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </EmptyCart>
                        <Button type="submit">Save your values</Button>
                    </Form>
                )}
            </Formik>
        </CartPanelContainer>
    );
};
