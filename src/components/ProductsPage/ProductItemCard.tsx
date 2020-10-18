import React from 'react';
import {ProductItemContainer, ItemBoxTextWrapper, ItemTextName, TextBig} from './ProductItemCard.styles';
import {IconRisk} from '../../helpers/svg/IconRisk';

export const ProductItemCard: React.FC<any> = ({risk}) => {
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
                        <IconRisk risk={risk} />
                        risk <TextBig>{risk}/10</TextBig>
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
