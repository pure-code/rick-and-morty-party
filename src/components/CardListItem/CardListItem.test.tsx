import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardListItem, { CardListItemProps } from './index';

const onClick = jest.fn();
const onDeleteCard = jest.fn();

const initialProps: CardListItemProps = {
  data: {
    name: 'Rick',
    id: '1',
    image: 'http://localhost/imageSrc',
  },
  onDeleteCard,
  onClick,
};

const renderComponent = (props: CardListItemProps): RenderResult =>
  render(<CardListItem {...props} />);

describe('CardListItem', () => {
  test('Проверяем рендер компонента', () => {
    const { baseElement } = renderComponent(initialProps);
    expect(baseElement).toBeInTheDocument();
  });
  test('Проверяем пропс картинки', () => {
    const { baseElement } = renderComponent(initialProps);
    const imgSrc = baseElement.querySelector('img')?.src;
    expect(imgSrc).toBe(initialProps.data.image);
  });

  test('Проверяем добавление карточки в party', () => {
    const { baseElement } = renderComponent(initialProps);

    const cardEl = baseElement.querySelectorAll('button')[0] as HTMLButtonElement;

    userEvent.click(cardEl);
    expect(onClick).toBeCalledWith(initialProps.data);
  });

  test('Проверяем удаление карточки', () => {
    const { baseElement } = renderComponent(initialProps);
    const deleteBtn = baseElement.querySelectorAll('button')[1] as HTMLButtonElement;
    userEvent.click(deleteBtn);
    expect(onDeleteCard).toBeCalledWith(initialProps.data.id);
  });
});
