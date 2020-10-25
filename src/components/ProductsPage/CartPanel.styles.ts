import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from './../../helpers/constants-styles';

export const CartPanelContainer = styled.aside`
    height: 100%;
    width: 25vw;
    margin: 5px;
    padding: 10px;
    background-color: ${colors.cardBackgroundColor};
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border-radius: 5px;
`;
export const EmptyCart = styled.div`
    position: relative;
    height: 60vh;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bodyBackgroundColor};
    border-radius: 5px;
    color: ${colors.textColor};
    font-size: ${fontSize.normal};
    padding: 10px;
    overflow: auto;
    text-align: center;
`;
export const ResultCart = styled.div`
    height: 60vh;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bodyBackgroundColor};
    border-radius: 5px;
    color: ${colors.textColor};
    font-size: ${fontSize.normal};
    padding: 10px;
`;
export const EmptyCartText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const TotalAmount = styled.p`
    font-size: ${fontSize.normal};
    color: ${colors.textActiveColor};
    text-align: center;
    margin: 20px 0;
`;
export const TextBold = styled.span`
    font-weight: 700;
`;
export const Button = styled.button`
    margin: 15px 0;
    width: 100%;
    padding: 10px;
    background-color: white;
    color: ${colors.hoverColor};
    border: 1px solid ${colors.hoverColor};
    border-radius: 5px;
    &:hover {
        background-color: ${colors.hoverColor};
        color: ${colors.textInvertColor};
        box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    }
`;
