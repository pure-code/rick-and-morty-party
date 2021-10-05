import { ChangeEvent, FC } from 'react';

import {
  Container,
} from './styled';

export interface InputProps{
  onSearch: (value: string) => void;
}

const Input: FC<InputProps> = ({ onSearch }) => {
  const onChangeHandler = (ev: ChangeEvent) => {
    const { value } = ev.target as HTMLInputElement;
    onSearch(value);
  };

  return (
    <Container onChange={onChangeHandler} />
  );
};

export default Input;
