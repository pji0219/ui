import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && 'border-radius: 8px'};
  ${({ circle }) => circle && 'border-radius: 50%'};
  ${({ width, height }) => (width || height) && 'display: block'};
`;

const Content = styled.span`
  opacity: 0;
`;

function Skeleton() {
  return (
    <Base>
      <Content></Content>
    </Base>
  );
}

export default Skeleton;