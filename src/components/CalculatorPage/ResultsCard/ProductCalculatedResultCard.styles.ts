import styled from '@emotion/styled';
import {colors} from '../../../helpers/constants-colors';

export const ResultCardContainer = styled.aside`
    flex: 1;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    margin: 5px;
    background-color: ${colors.cardBackgroundColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border: 10px solid ${colors.cardBackgroundColor};
`;
export const Button = styled.button`
    border-radius: 5px;
    text-decoration: none;
    color: ${colors.hoverColor};
    margin-top: 10px;
    padding: 5px;
    &:hover {
        background-color: ${colors.hoverColor};
        color: ${colors.textInvertColor};
        box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    }
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const PieChartWrapper = styled.div`
    flex: 5;
    height: 50vh;
`;
