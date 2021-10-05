import { FC } from 'react';
import { CardType } from '../../types/CardType';
import Button from '../Button';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import {
  Container,
  Pic,
  Delete,
  CardButton,
} from './styled';

export interface CardListItemProps{
  data: CardType;
  onClick: (info: CardType) => void;
  onDeleteCard: (id: string) => void;
}

const CardListItem: FC<CardListItemProps> = ({
  data, onClick, onDeleteCard,
}) => {
  const { image } = data;
  const onClickHandler = () => {
    onClick(data);
  };
  const onDeleteCardHandler = (id:string) => () => onDeleteCard(id);

  return (
    <Container>
      <CardButton onClick={onClickHandler} />
      <Delete>
        <Button onClick={onDeleteCardHandler(data.id)}>
          <DeleteIcon />
        </Button>
      </Delete>
      {image && <Pic src={image} alt="" />}
    </Container>
  );
};

export default CardListItem;
