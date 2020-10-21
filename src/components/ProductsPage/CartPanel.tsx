import React from 'react';
import {CartPanelContainer, EmptyCart} from './CartPanel.styles';
import {CartPanelInput} from './CartPanelInput';

export const CartPanel: React.FC<any> = ({selectedProducts}) => {
    return (
        <CartPanelContainer>
            <CartPanelInput />
            <EmptyCart>
                {selectedProducts.length === 0 ? (
                    'Click on the list on the right side to add product to the cart'
                ) : (
                    <ul>
                        {selectedProducts.map((product: any) => {
                            return <li key={product.id}>{product.name}</li>;
                        })}
                    </ul>
                )}
            </EmptyCart>
        </CartPanelContainer>
    );
};
