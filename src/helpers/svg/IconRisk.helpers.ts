import {riskLevels} from './IconRisk.constants';

export const generateIconData = (index: number, color: any) => {
    const iconData: any = [];
    for (let i = 0; i <= riskLevels; i++) {
        iconData.push({color: i <= index - 1 ? color[index - 1] : '#ecf0f1', translate: i * 5 + 1});
    }
    return iconData;
};
