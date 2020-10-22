import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from './../../helpers/constants-styles';

export const CartPanelContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 95%;
    margin: 5px;
    padding: 10px;
    background-color: ${colors.cardBackgroundColor};
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border-radius: 5px;
`;
export const EmptyCart = styled.div`
    height: 60vh;
    width: 210px;
    flex: 1;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bodyBackgroundColor};
    border-radius: 5px;
    color: ${colors.textColor};
    font-size: ${fontSize.normal};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 5px;
    overflow: auto;
`;
export const ResultCart = styled.div`
    height: 60vh;
    width: 210px;
    flex: 1;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bodyBackgroundColor};
    border-radius: 5px;
    color: ${colors.textColor};
    font-size: ${fontSize.normal};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 5px;
`;
export const Button = styled.button`
    margin: 15px;
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
