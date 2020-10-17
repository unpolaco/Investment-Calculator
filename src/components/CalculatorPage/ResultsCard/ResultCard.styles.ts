import styled from '@emotion/styled';

export const ResultCardContainer = styled.aside`
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    height: 95%;
    overflow: auto;
    padding: 10px;
    margin: 5px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const TextResult = styled.p`
    font-size: 16px;
    text-align: center;
    color: grey;
`;
export const TextBold = styled.span`
    font-size: 17px;
    text-align: center;
    font-weight: 700;
`;
