import { FC } from 'react';

import {
  Container,
} from './styled';

interface ButtonProps{
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default Button;
