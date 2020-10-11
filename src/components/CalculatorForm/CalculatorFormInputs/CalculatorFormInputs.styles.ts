import styled from '@emotion/styled';

export const Input = styled.input`
    border-color: transparent;
    padding: 5px;
    height: 20px;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`;
export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 20px;
`;
export const Label = styled.label`
    font-size: 12px;
    color: grey;
    text-align: left;
    margin: 5px 0;
`;
export const Error = styled.p`
    font-size: 12px;
    color: red;
    text-align: left;
    margin: 5px 0;
`;
