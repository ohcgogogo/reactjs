import React, {MouseEventHandler, ReactNode} from 'react';

import styled, { css, keyframes } from 'styled-components';
import {ParentProps} from "src/App";
import { darken, lighten } from 'polished';
import {TFunction} from "i18next";

// interface Props extends ParentProps { // TODO Provider로 여기까지 프로퍼티가 전달이 안되는데 어떻게 해야하는게? context 개넘을 확인해봐야함.
interface Props {
    children?: JSX.Element|JSX.Element[];
    name? : string;
    event? : boolean;
    disabled? : boolean;
    onClick? : MouseEventHandler;
}

const colors : {[key: string] : string} = {
    type1: '#2172b2',
    type2: '#fdb810',
    type3: '#0d905d',
    default: '#222222'
};
const onEventAnimation = (color : string) => keyframes`
  30%, 70% {
    box-shadow: 0rem 0.2rem 1.2rem -0.1rem ${lighten(0.05, color)};
  }
`;
const Button = styled.button`
      display: flex;
      flex-direction: column;	  
      align-items: center;
      justify-content: center;
      height: 8rem;
      padding: 1rem;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
      border: 0;
      border-radius: 0.4rem;
      ${(props) => {
            const color = colors[props.name as string] || colors['default'];
            const eventStyle = ({event} : Props) => {
              if (event) {
                return css`
                  grid-column: 1 / 4;
                  order: -1;
                  animation: ${onEventAnimation(color)} 3s infinite;
                `;
                }
            };
            return css`
              background-color: ${color};
              &:hover {
                cursor: pointer;
                background-color: ${darken(0.05, color)};
              }
              &:disabled {
                color: #999;
                background-color: #c0c0c0;
                cursor: not-allowed;
              }
              ${eventStyle};
            `;
    }}
  span {
    display: inline-block;
    margin: 0.4rem 0 0;
    font-size: 80%;
    font-weight: 300;
  }  
`;


function PolishedChildrenButton({children, ...rest} : Props) {
    return <Button {...rest}>{children}</Button>;
}

export default PolishedChildrenButton;