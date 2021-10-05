import { FC, useState } from 'react';
import Input from '../../components/Input';
import CardList from '../../components/CardList';
import { debounce } from '../../utils/debounce';
import Card from '../../components/Card';
import { CardType } from '../../types/CardType';

import {
  Container,
  Heading,
  Party,
} from './styled';

const initialParty = {
  rick: '',
  morty: '',
};

const Main: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [party, setParty] = useState(initialParty);
  const [banList, setBanList] = useState<string[]>([]);
  const onSearchHandler = debounce((name: string) => {
    setSearchValue(name);
  });
  const setBanListHandler = (id: string) => setBanList((prevState) => [...prevState, id]);
  const setPartyHandler = (info: CardType) => {
    Object.keys(initialParty).forEach((key) => {
      if (info.name.toLowerCase().includes(key)) {
        setParty((prevState) => ({ ...prevState, [key]: info.image }));
      }
    });
  };

  return (
    <Container>
      <Input onSearch={onSearchHandler} />
      {searchValue.length > 2 && (
        <CardList
          banList={banList}
          setBanList={setBanListHandler}
          searchValue={searchValue}
          onCardClick={setPartyHandler}
        />
      )}
      <Heading>Party</Heading>
      <Party>
        <Card name="Rick" image={party.rick} />
        <Card name="Morty" image={party.morty} />
      </Party>
    </Container>
  );
};

export default Main;
