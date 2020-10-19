import React from 'react';
import {Input, Fieldset, Label, FieldContainerCurrency} from './CartPanelInput.styles';

export const CartPanelInput: React.FC = () => {
    return (
        <Fieldset>
            <Label>Enter your total value to invest</Label>
            <FieldContainerCurrency>
                <Input type="number" />
            </FieldContainerCurrency>
        </Fieldset>
    );
};
