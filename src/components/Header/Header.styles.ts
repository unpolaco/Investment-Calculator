import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 80px;
    margin: 5px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: grey;
`;
export const SubTitle = styled.h3`
    font-size: 14px;
    color: #95a5a6;
`;
export const ButtonLink = styled(NavLink)`
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    background-color: #f1c40f;
    color: white;
    margin-top: 10px;
    padding: 5px;
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
`;
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
    color: grey;
`;
