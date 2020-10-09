import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {css, Global} from '@emotion/core';
import {resetStyles} from './resetStyles';

ReactDOM.render(
    <>
        <Global
            styles={css`
                ${resetStyles}
            `}
        />
        <App />
    </>,
    document.getElementById('root'),
);
