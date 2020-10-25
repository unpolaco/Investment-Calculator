import React from 'react';
import {ResponsivePie} from '@nivo/pie';

export const ProductResultPieChart: React.FC<any> = ({pieChartData}) => {
    const data = pieChartData.investmentList;
    data.map((product: any) => {
        delete product.id;
        product.id = product.name;
        product.value = product.amount;
        delete product.amount;
        return product;
    });

    return (
        <ResponsivePie
            data={data}
            margin={{top: 40, right: 120, bottom: 80, left: 120}}
            innerRadius={0.25}
            padAngle={2}
            cornerRadius={3}
            colors={{scheme: 'nivo'}}
            borderWidth={1}
            borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={4}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={8}
            radialLabelsLinkHorizontalLength={8}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{from: 'color'}}
            sliceLabel={d => `${new Intl.NumberFormat('pl-PL', {currency: 'PLN', style: 'currency'}).format(d.value)} - ${d.percentQuota}%`}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
};
