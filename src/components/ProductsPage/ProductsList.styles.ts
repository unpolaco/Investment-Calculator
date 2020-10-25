import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';

export const ProductsListContainer = styled.aside`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    overflow: auto;
    margin: 5px;
    background-color: ${colors.cardBackgroundColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    border: 10px solid ${colors.cardBackgroundColor};
`;
