import React from 'react';
import {ProductItemContainer, ItemBoxTextWrapper, ItemTextName, TextBig} from './ProductItemCard.styles';

export const ProductItemCard = () => {
    return (
        <>
            <ProductItemContainer>
                <ItemTextName>Investor Bezpiecznego Wzrostu</ItemTextName>
                <ItemBoxTextWrapper>
                    <div>Category</div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <div>
                        rating <TextBig>1/10</TextBig>
                    </div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <div>
                        risk <TextBig>5/10</TextBig>
                    </div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <div>
                        av return <TextBig>12%</TextBig>
                    </div>
                </ItemBoxTextWrapper>
            </ProductItemContainer>
        </>
    );
};
