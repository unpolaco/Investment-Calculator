import React from 'react';

export const IconRisk = ({risk}: any) => {
    const levelNumber = 6;
    const riskColor = '#ffeb3b';
    const generateIconData = (index: number) => {
        const iconData: any = [];
        for (let i = 0; i <= levelNumber; i++) {
            iconData.push({color: i <= index - 1 ? riskColor : '#fff', translate: i * 5 + 1});
        }
        return iconData;
    };
    const iconData = generateIconData(risk);
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
