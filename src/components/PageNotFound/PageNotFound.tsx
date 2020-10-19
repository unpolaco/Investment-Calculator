import React from 'react';
import {Header} from './PageNotFound.styles';
import {ReactComponent as IconNotFound} from '../../helpers/svg/IconNotFound.svg';

export const PageNotFound = () => {
    return (
        <Header>
            <IconNotFound />
            <div>Sorry, this page does not exist.</div>
        </Header>
    );
};
