import styled from '@emotion/styled';

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
    width: 150px;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
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
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 3px 15px;
    width: 150px;
    height: 35px;
    flex: 1;
    cursor: pointer;
    background-color: #fff;
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
    font-size: 12px;
    color: grey;
    text-align: left;
    margin: 5px 0;
`;
export const Error = styled.p`
    position: absolute;
    bottom: -20px;
    font-size: 12px;
    color: red;
    text-align: left;
    margin: 5px 0;
`;
