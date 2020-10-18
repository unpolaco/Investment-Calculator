import React from 'react';
import {generateIconRatingData} from './Icons.helpers';
import {ratingColors, ratingTransformValues} from './Icons.constants';

export const IconRating: React.FC<any> = ({rating}) => {
    const iconRatingData = generateIconRatingData(rating, ratingColors, ratingTransformValues);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="62.855" height="10.08" viewBox="0 0 62.855 10.08">
            <g transform="translate(-264.5 -308.5)">
                {iconRatingData.map((el: any, index: number) => {
                    return (
                        <path
                            key={index}
                            fill={el.color}
                            d="M42.855,51.877H38.688L37.428,48l-1.26,3.877H32L35.392,54.2,34.084,58.08l3.344-2.423,3.344,2.423L39.463,54.2Z"
                            transform={el.translate}
                        />
                    );
                })}
            </g>
        </svg>
    );
};
