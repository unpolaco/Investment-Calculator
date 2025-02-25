import styled from '@emotion/styled';
import {colors} from '../../helpers/constants-colors';
import {fontSize} from './../../helpers/constants-styles';
import {NavLink} from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 80px;
    margin: 5px;
    padding: 10px;
    background-color: ${colors.darkBackground};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${colors.shadowColor};
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 15px;
`;
export const Title = styled.h1`
    font-size: ${fontSize.title};
    font-weight: 600;
    color: ${colors.logoColor};
`;
export const SubTitle = styled.h3`
    font-size: ${fontSize.subtitle};
    color: ${colors.textHeaderColor};
`;
export const ButtonLink = styled(NavLink)`
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${colors.hoverColor};
    text-decoration: none;
    color: ${colors.hoverColor};
    margin-top: 10px;
    padding: 5px;
    :hover {
        background-color: ${colors.hoverColor};
        color: ${colors.textInvertColor};
        box-shadow: 0 4px 8px 0 ${colors.shadowColor};
    }
`;
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
    color: ${colors.textHeaderColor};
`;
