import React from 'react';
import {ResponsiveLine} from '@nivo/line';

export const ProductResultLineChart: React.FC<any> = ({lineChartData}) => {
    const data = lineChartData.dataCalculations;

    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 220, bottom: 70, left: 220}}
            xScale={{type: 'linear', min: 'auto', max: 'auto'}}
            yScale={{type: 'linear'}}
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            enablePoints={false}
            pointSize={5}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'color', modifiers: []}}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 22,
                    translateY: 55,
                    itemsSpacing: 100,
                    itemDirection: 'left-to-right',
                    itemWidth: 94,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 15,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};
