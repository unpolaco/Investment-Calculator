export const chartDataConvert = (data: any) => {
    return data.map((el: any) => {
        return {
            'Start Value': el.startValue,
            'Cumulative Contribution': el.cumulativeContribution,
            'Annual Interest': el.annualInterest,
            'Year Label': el.yearLabel,
        };
    });
};

export const pieDataConvert = (data: any) => {
    for (let i = 0; i < data.length; i++) {
        data[i].value = +data[i].value.toFixed();
    }
    return data;
};
