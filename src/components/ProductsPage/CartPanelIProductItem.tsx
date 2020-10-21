import React from 'react';

export const CartPanelProductItem: React.FC<any> = ({name, id}) => {
    return (
        <>
            <li key={id}>
                {name}
                <input type="number" />
            </li>
        </>
    );
};
