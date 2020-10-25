import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from '../../helpers/constants-styles';

export const ProductResultSummaryContainer = styled.div`
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 5px;
    background-color: ${colors.listItemsColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
`;
export const Title = styled.div`
    font-size: ${fontSize.summaryAmount};
    font-weight: bold;
    color: ${colors.textColor};
    margin: 10px 0;
`;
