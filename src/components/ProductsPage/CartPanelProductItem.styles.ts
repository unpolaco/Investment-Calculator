import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from './../../helpers/constants-styles';

export const Input = styled.input`
    border-color: transparent;
    padding: 5px 35px;
    height: 35px;
    width: 100%;
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
    outline-color: transparent;
    text-align: right;
    color: ${colors.textActiveColor};
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;
export const FieldContainerCurrency = styled.div`
    display: inline-block;
    color: ${colors.textActiveColor};
    position: relative;
    width: 70%;
    ::after {
        position: absolute;
        top: 9px;
        right: 15px;
        content: 'zł';
    }
`;
export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8px;
    border-top: 1px solid ${colors.borderColor};
`;
export const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const PercentQuota = styled.p`
    font-weight: bold;
    margin-left: 15px;
    color: ${colors.textActiveColor};
`;
export const ProductName = styled.p`
    font-weight: bold;
    color: ${colors.textActiveColor};
    text-align: left;
    margin: 8px;
`;
export const Error = styled.p`
    position: absolute;
    bottom: -20px;
    font-size: ${fontSize.errorInput};
    color: ${colors.errorColor};
    text-align: left;
    margin: 5px 0;
`;
