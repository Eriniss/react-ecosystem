import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('when the + button is pressed, the counter changes +1', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('when the - button is pressed, the counter changes -1', () => {
  render(<App />);

  const buttonElement = screen.getByTestId('minus-button');
  // 버튼 클릭
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  // 클릭한 버튼이 1인지 확인
  expect(counterElement).toHaveTextContent(-1);
});

test('toggle On/Off switch', () => {
  render(<App />);

  // 초기값이 Off인지 확인
  const switchButton = screen.getByText('Off');
  expect(switchButton).toBeInTheDocument();

  // 버튼 클릭
  fireEvent.click(switchButton);

  // 클릭한 버튼이 'On' 텍스트를 포함하는지 확인
  expect(switchButton).toHaveTextContent('On');

  // 다시 버튼 클릭
  fireEvent.click(switchButton);

  // 마지막으로 클릭한 버튼이 'Off' 텍스트를 포함하는지 확인
  expect(switchButton).toHaveTextContent('Off');
});
