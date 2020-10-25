import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {CartPanelContainer, EmptyCart, Button, EmptyCartText, TotalAmount, TextBold} from './CartPanel.styles';
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
                        <TotalAmount>
                            Your total amount is <TextBold>{formattedTotalAmount}</TextBold>
                        </TotalAmount>
                        <EmptyCart>
                            {selectedProducts.length === 0 ? (
                                <EmptyCartText>Click on the list to add product to the cart</EmptyCartText>
                            ) : (
                                <div>
                                    <div>Enter amount on each product</div>
                                    {selectedProducts.map((product: any) => (
                                        <div key={product.id}>
                                            <CartPanelProductItem
                                                key={product.id}
                                                name={product.name}
                                                id={product.id}
                                                handleBlur={handleBlur}
                                                calculateProducts={calculateProducts}
                                                values={values}
                                                percentQuota={product.percentQuota}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </EmptyCart>
                        <Button type="submit">Submit your products</Button>
                    </Form>
                )}
            </Formik>
        </CartPanelContainer>
    );
};
