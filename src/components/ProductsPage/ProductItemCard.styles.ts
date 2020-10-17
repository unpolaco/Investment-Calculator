import styled from '@emotion/styled';

export const ProductItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 80px;
    margin: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 15px;
    cursor: pointer;
    transition: 0.3s;
    color: grey;
    &:hover {
        background-color: #f1c40f;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
`;
export const ItemBoxTextWrapper = styled.div`
    font-size: 12px;
    border-left: 1px solid grey;
    margin: 5px;
    padding: 5px 15px;
`;
export const ItemTextName = styled.div`
    flex: 1;
    margin: 5px;
    padding: 5px;
`;
export const TextBig = styled.div`
    font-size: 22px;
    font-weight: bold;
`;
