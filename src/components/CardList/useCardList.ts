import { gql, useQuery } from '@apollo/client';
import { CardType } from '../../types/CardType';

export const cardListQuery = gql`
    query GetCardList($name: String!) {
      characters(filter: {name: $name}){
        results{
          id
          name
          image
        }
      }
    }
`;

export interface CardListQueryResult{
  cardList: CardType[],
  loading: boolean;
}

export const useCardList = (name: string): CardListQueryResult => {
  const { data, loading } = useQuery(cardListQuery, { variables: { name } });
  return ({
    cardList: data?.characters?.results || [],
    loading,
  });
};
