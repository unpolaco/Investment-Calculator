import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from '../../helpers/constants-styles';

export const ProductItemContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding: 15px;
    transition: 0.3s;
    color: ${({color}) => (color ? colors.textInvertColor : colors.textColor)};
    transform: ${({color}) => (color ? 'scaleX(1.01)' : 'scaleX(1)')};
    background-color: ${({color}) => (color ? colors.hoverColor : colors.listItemsColor)};
`;
export const ItemBoxTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: ${fontSize.productLabel};
    border-left: 1px solid ${colors.borderColor};
    margin: 5px;
    padding: 5px 15px;
    width: 120px;
    height: 40px;
`;
export const ItemTextAmount = styled.div`
    flex: 1;
    font-size: ${fontSize.summaryAmount};
    font-weight: bold;
    margin: 5px;
    padding: 5px;
`;
export const ItemTextName = styled.div`
    flex: 1;
    font-weight: bold;
    margin: 5px;
    padding: 5px;
`;
export const ItemTextCategory = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize.productLabel};
    font-weight: normal;
    margin: 15px 0 0 0;
`;
export const TextBig = styled.div`
    font-size: ${fontSize.productNumber};
    font-weight: bold;
`;
export const Dot = styled.div`
    height: 12px;
    width: 12px;
    background-color: ${colors.categoryColors[1]};
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
`;
