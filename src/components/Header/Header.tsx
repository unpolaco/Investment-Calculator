import React from 'react';
import {ButtonLink, LinkWrapper, HeaderContainer, Title, SubTitle, TitleWrapper} from './Header.styles';
import {ROUTES} from '../../helpers/routes';

export const Header = () => {
    return (
        <HeaderContainer>
            <TitleWrapper>
                <Title>SOLIDers Financial Group</Title>
                <SubTitle>SOLIDers is a leading provider of high quality investment services and products</SubTitle>
            </TitleWrapper>
            <LinkWrapper>
                <div>Check our new feature - Investment Calculator!</div>
                <ButtonLink to={ROUTES.CALCULATOR}>Go to Investment Calculator</ButtonLink>
            </LinkWrapper>
        </HeaderContainer>
    );
};
