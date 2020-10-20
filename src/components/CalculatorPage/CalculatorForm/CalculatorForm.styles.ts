import styled from '@emotion/styled';
import {colors} from '../../../helpers/constants-colors';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const InputsCard = styled.aside`
    width: 25%;
    height: 95%;
    margin: 5px;
    padding: 10px;
    background-color: ${colors.cardBackgroundColor};
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border-radius: 5px;
`;
export const Button = styled.button`
    height: 80%;
    margin: 15px;
    padding: 10px;
    background-color: white;
    border: 1px solid ${colors.borderColor};
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border-radius: 5px;
`;
