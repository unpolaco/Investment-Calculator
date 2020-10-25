import React from 'react';
import {
    ProductItemContainer,
    ItemBoxTextWrapper,
    ItemTextName,
    ItemTextCategory,
    TextBig,
    Dot,
    ItemTextAmount,
} from './ProductSummaryCard.styles';
import {IconRisk} from '../../helpers/svg/IconRisk';
import {IconRating} from '../../helpers/svg/IconRating';

export const ProductSummaryCard: React.FC<any> = ({id, name, risk, rating, rate, category, amount}) => {
    const formattedAmount = new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(amount);
    return (
        <>
            <ProductItemContainer id={id}>
                <ItemTextAmount>{formattedAmount}</ItemTextAmount>
                <ItemTextName>
                    {name}
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
                        rate <TextBig>{rate}%</TextBig>
                    </div>
                </ItemBoxTextWrapper>
            </ProductItemContainer>
        </>
    );
};
