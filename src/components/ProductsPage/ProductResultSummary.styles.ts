import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';

export const ProductResultSummaryContainer = styled.div`
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
