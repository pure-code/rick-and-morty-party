import { FC } from 'react';

import {
  Container,
  Pic,
  Name,
} from './styled';

interface CardProps{
  image: string;
  name: string;
}

const Card: FC<CardProps> = ({
  image, name,
}) => (
  <Container withBg={!image}>
    {image ? <Pic src={image} alt="" /> : <Name>{name}</Name>}
  </Container>
);

export default Card;
