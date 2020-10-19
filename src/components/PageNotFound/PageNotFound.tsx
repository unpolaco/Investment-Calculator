import React from 'react';
import {Header} from './PageNotFound.styles';
import {IconNotFound} from '../../helpers/svg/IconNotFound';

export const PageNotFound = () => {
    return (
        <Header>
            <IconNotFound />
            <div>Sorry, this page does not exist.</div>
        </Header>
    );
};
