import React from 'react';
import {render } from '@testing-library/react-native';
import Modal from '~/components/Modal';
import {TodoContextProvider} from '../../context/TodoContext';

describe('<TodoList/>', () => {
  test('it should capture snapshot of component', () => {
    const tree = render(<TodoContextProvider><Modal /></TodoContextProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
