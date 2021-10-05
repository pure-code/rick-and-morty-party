import { FC } from 'react';
import { useCardList } from './useCardList';
import { CardType } from '../../types/CardType';
import Spinner from '../Spinner';
import ErrorBoundary from '../ErrorBoundary';
import CardListItem from '../CardListItem';

import {
  Container,
} from './styled';

interface CardListProps{
  searchValue: string;
  banList: string[];
  setBanList: (id: string) => void;
  onCardClick: (info: CardType) => void;
}

const CardList: FC<CardListProps> = ({
  searchValue, banList, setBanList, onCardClick,
}) => {
  const { cardList, loading } = useCardList(searchValue);

  return (
    <ErrorBoundary>
      <Container>
        <Spinner loading={loading}>
          {
            cardList.map(
              (data: CardType) =>
                !banList.includes(data.id) && (
                  <CardListItem
                    onDeleteCard={setBanList}
                    onClick={onCardClick}
                    data={data}
                    key={data.id}
                  />
                ),
            )
          }
        </Spinner>
      </Container>
    </ErrorBoundary>
  );
};

export default CardList;
