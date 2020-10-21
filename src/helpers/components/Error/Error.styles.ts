import styled from '@emotion/styled';
import {colors} from '../../constants-colors';
import {fontSize} from './../../constants-styles';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const ErrorText = styled.div`
    font-size: ${fontSize.normal};
    color: ${colors.errorColor};
`;
