import React, {useState} from 'react';
import {ButtonLink, LinkWrapper, HeaderContainer, Title, SubTitle, TitleWrapper} from './Header.styles';
import {ROUTES} from '../../helpers/routes';
import {IconLogo} from '../../helpers/svg/IconLogo';

export const Header = () => {
    const [currentPage, setCurrentPage] = useState<string>('products');

    const handleSetCurrentPage = (currentPage: string) => {
        setCurrentPage(currentPage);
    };
    return (
        <HeaderContainer>
            <IconLogo />
            <TitleWrapper>
                <Title>SOLIDers Financial Group</Title>
                <SubTitle>SOLIDers is a leading provider of high quality investment services</SubTitle>
            </TitleWrapper>
            {currentPage === 'calculator' || currentPage === undefined ? (
                <LinkWrapper>
                    <div>Go back to our Financial Products</div>
                    <ButtonLink onClick={() => handleSetCurrentPage('products')} to={ROUTES.PRODUCTS}>
                        Main Page
                    </ButtonLink>
                </LinkWrapper>
            ) : (
                <LinkWrapper>
                    <div>Check our new feature!</div>
                    <ButtonLink onClick={() => handleSetCurrentPage('calculator')} to={ROUTES.CALCULATOR}>
                        Investment Calculator
                    </ButtonLink>
                </LinkWrapper>
            )}
        </HeaderContainer>
    );
};
