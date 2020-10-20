import styled from '@emotion/styled';
import {colors} from '../../../../helpers/constants-colors';
import {fontSize} from './../../../../helpers/constants-styles';

export const FieldContainerCurrency = styled.div`
    display: inline-block;
    position: relative;
    ::after {
        position: absolute;
        top: 7px;
        right: 15px;
        content: 'zł';
    }
`;
export const FieldContainerPercent = styled.div`
    display: inline-block;
    position: relative;
    ::after {
        position: absolute;
        top: 7px;
        right: 15px;
        content: '%';
    }
`;
export const Input = styled.input`
    border-color: transparent;
    padding: 5px 35px;
    height: 35px;
    width: 190px;
    flex: 1;
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
    outline-color: transparent;
    text-align: right;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;
export const Select = styled.select`
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
    padding: 3px 15px;
    width: 190px;
    height: 35px;
    flex: 1;
    cursor: pointer;
    background-color: ${colors.cardBackgroundColor};
    outline-color: transparent;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
`;
export const Fieldset = styled.fieldset`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 8px 20px;
`;
export const Label = styled.label`
    font-size: ${fontSize.inputLabel};
    color: ${colors.textLabelsColor};
    text-align: left;
    margin: 5px 0;
`;
export const Error = styled.p`
    position: absolute;
    bottom: -20px;
    font-size: ${fontSize.errorInput};
    color: ${colors.errorColor};
    text-align: left;
    margin: 5px 0;
`;
