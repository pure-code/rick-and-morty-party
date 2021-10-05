import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }

  to {
    transform: rotate(360deg) scale(.5);
  }
`;

export const Spin = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #333;
  animation: ${rotate} 2s linear infinite backwards;
`;
