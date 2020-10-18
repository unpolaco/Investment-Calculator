import React from 'react';
import {ProductItemContainer, ItemBoxTextWrapper, ItemTextName, TextBig} from './ProductItemCard.styles';
import {IconRisk} from '../../helpers/svg/IconRisk';
import {IconRating} from '../../helpers/svg/IconRating';

export const ProductItemCard: React.FC<any> = ({risk, rating}) => {
    return (
        <>
            <ProductItemContainer>
                <ItemTextName>Investor Bezpiecznego Wzrostu</ItemTextName>
                <ItemBoxTextWrapper>
                    <div>Category</div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <div>
                        <IconRating rating={rating} />
                        rating <TextBig>{rating}/5</TextBig>
                    </div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <div>
                        <IconRisk risk={risk} />
                        risk <TextBig>{risk}/6</TextBig>
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
