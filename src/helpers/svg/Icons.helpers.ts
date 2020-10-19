import {riskLevels, ratingLevels} from './Icons.constants';

export const generateIconRiskData = (index: number, color: any) => {
    const iconData = [];
    for (let i = 0; i <= riskLevels; i++) {
        iconData.push({color: i <= index - 1 ? color[index - 1] : '#ecf0f1', translate: i * 5 + 1});
    }
    return iconData;
};
export const generateIconRatingData = (index: number, color: string[], transform: string[]) => {
    const iconData = [];
    for (let i = 0; i <= ratingLevels; i++) {
        iconData.push({color: i <= index - 1 ? color[0] : color[1], translate: transform[i]});
    }
    return iconData;
};
