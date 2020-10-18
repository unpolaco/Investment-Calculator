import React from 'react';
import {riskColors} from './IconRisk.constants';
import {generateIconData} from './IconRisk.helpers';

export const IconRisk = ({risk}: any) => {
    const iconData = generateIconData(risk, riskColors);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20">
            <g transform="translate(-1)">
                {iconData.map((el: any) => {
                    return <rect fill={el.color} width="4" height="20" rx="2" transform={`translate(${el.translate})`} />;
                })}
            </g>
        </svg>
    );
};
