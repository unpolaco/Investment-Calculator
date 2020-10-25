import React, {useState} from 'react';

export const RadioButton: React.FC<any> = ({handleSetPeriod}) => {
    const options = ['5', '10', '20'];
    const [period, setPeriod] = useState('5');

    function handleSelectOption(e: any) {
        setPeriod(e.target.value);
        handleSetPeriod(e.target.value);
    }
    return (
        <div>
            {options.map((option: string) => (
                <div key={option} className="radio">
                    <label>
                        <input type="radio" value={option} checked={option === period} onChange={(e: any) => handleSelectOption(e)} />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};
