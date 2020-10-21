import React from 'react';
import {ProductItemContainer, ItemBoxTextWrapper, ItemTextName, ItemTextCategory, TextBig, Dot} from './ProductItemCard.styles';
import {IconRisk} from '../../helpers/svg/IconRisk';
import {IconRating} from '../../helpers/svg/IconRating';

export const ProductItemCard: React.FC<any> = ({id, name, risk, rating, rate, category, onClickProduct}) => {
    const handleClick = (e: any) => {
        onClickProduct(e);
    };
    return (
        <>
            <ProductItemContainer id={id} onClick={handleClick}>
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
