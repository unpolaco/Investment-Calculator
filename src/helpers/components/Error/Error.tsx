import React from 'react';
import {Wrapper, ErrorText} from './Error.styles';

export const Error: React.FC<any> = ({error}) => (
    <Wrapper>
        <ErrorText>Error when loading data was occured... </ErrorText>
        <ErrorText>{error}</ErrorText>
    </Wrapper>
);
