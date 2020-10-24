import React from 'react';
import {ResponsivePie} from '@nivo/pie';

export const ChartPie: React.FC<any> = ({pieChartData}) => {
    const data = pieChartData.investmentList;
    data.map((product: any) => {
        delete product.id;
        product.id = product.name;
        product.amount = product.value;
        delete product.amount;
        return product;
    });

    return (
        <ResponsivePie
            data={data}
            margin={{top: 40, right: 80, bottom: 80, left: 80}}
            innerRadius={0.25}
            padAngle={2}
            cornerRadius={3}
            colors={{scheme: 'nivo'}}
            borderWidth={1}
            borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={8}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={17}
            radialLabelsLinkHorizontalLength={20}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{from: 'color'}}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
};
