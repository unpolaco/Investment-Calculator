import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';

export const CartPanelContainer = styled.aside`
    width: 25%;
    height: 95%;
    margin: 5px;
    padding: 10px;
    background-color: ${colors.cardBackgroundColor};
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border-radius: 5px;
`;
export const EmptyCart = styled.aside`
    height: 80%;
    width: 190px;
    flex: 1;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bodyBackgroundColor};
    border-radius: 5px;
    color: ${colors.textColor};
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 5px;
`;
