import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import {colors} from '../../constants-colors';

const motion = (props: any) => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const RingSpinner = styled.div`
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 6px;
    border: 6px solid ${colors.loaderColor};
    border-radius: 50%;
    animation: ${p => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.loaderColor} transparent transparent transparent;
    :nth-child(1) {
        animation-delay: -0.45s;
    }
    :nth-child(2) {
        animation-delay: -0.3s;
    }
    :nth-child(3) {
        animation-delay: -0.15s;
    }
`;
