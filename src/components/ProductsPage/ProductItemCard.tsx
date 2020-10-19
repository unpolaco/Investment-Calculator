import React from 'react';
import {ProductItemContainer, ItemBoxTextWrapper, ItemTextName, ItemTextCategory, TextBig, Dot} from './ProductItemCard.styles';
import {IconRisk} from '../../helpers/svg/IconRisk';
import {IconRating} from '../../helpers/svg/IconRating';

export const ProductItemCard: React.FC<any> = ({risk, rating, category}) => {
    return (
        <>
            <ProductItemContainer>
                <ItemTextName>
                    Investor Bezpiecznego Wzrostu
                    <ItemTextCategory>
                        <Dot />
                        {category}
                    </ItemTextCategory>
                </ItemTextName>
                <ItemBoxTextWrapper>
                    <div>
                        rating <TextBig>{rating}/5</TextBig>
                        <IconRating rating={rating} />
                    </div>
                </ItemBoxTextWrapper>
                <ItemBoxTextWrapper>
                    <IconRisk risk={risk} />
                    <div>
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
