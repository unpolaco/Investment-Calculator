import React from 'react';
import {CartPanelContainer, EmptyCart} from './CartPanel.styles';
import {CartPanelInput} from './CartPanelInput';
export const CartPanel: React.FC<any> = () => {
    return (
        <CartPanelContainer>
            <CartPanelInput />
            <EmptyCart>Click on the list on the right side to add product to the cart</EmptyCart>
        </CartPanelContainer>
    );
};
