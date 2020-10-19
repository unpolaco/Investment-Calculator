import React from 'react';
import {riskColors} from './Icons.constants';
import {generateIconRiskData} from './Icons.helpers';

export const IconRisk: React.FC<any> = ({risk}) => {
    const iconData = generateIconRiskData(risk, riskColors);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20">
            <g transform="translate(-1)">
                {iconData.map((el: any, index: number) => {
                    return <rect key={index} fill={el.color} width="4" height="20" rx="2" transform={`translate(${el.translate})`} />;
                })}
            </g>
        </svg>
    );
};
