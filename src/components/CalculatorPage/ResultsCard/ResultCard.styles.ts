import styled from '@emotion/styled';
import {colors} from '../../../helpers/constants-colors';
import {fontSize} from './../../../helpers/constants-styles';

export const ResultCardContainer = styled.aside`
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    height: 95%;
    overflow: auto;
    padding: 10px;
    margin: 5px;
    background-color: ${colors.cardBackgroundColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
`;
export const TextResult = styled.p`
    font-size: ${fontSize.calculatorResult};
    text-align: center;
    color: ${colors.textColor};
`;
export const TextBold = styled.span`
    font-size: ${fontSize.calculatorResultBold};
    text-align: center;
    font-weight: 700;
`;
