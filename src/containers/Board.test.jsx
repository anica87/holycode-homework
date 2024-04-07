import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import configureStore from 'redux-mock-store';
import Board from './Board';

// Mock store setup
const mockStore = configureStore([]);
let store;

describe('<Board />', () => {
  beforeEach(() => {
    store = mockStore({
      search: '', // Initial state of the search reducer
      board: {
        lists: [
          { id: 'list1', name: 'List 1', cards: [{id: "111", content: "card 1"}, {id: "222", content: "card 2"}] },
          { id: 'list2', name: 'List 2', cards: [{id: "333", content: "card 3"}, {id: "444", content: "card 4"}] }
        ]
      }
    });
    store.dispatch = vi.fn(); // Spy on store's dispatch method
  });

  it('renders Board component with correct number of CardList components', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    const cardLists = getAllByTestId('card-list');
    expect(cardLists).toHaveLength(2); // Assuming 2 lists are rendered
  });

  // it('dispatches actions correctly on drag and drop between lists', () => {
  //   const { getByTestId } = render(
  //     <Provider store={store}>
  //       <Board />
  //     </Provider>
  //   );

  //   const draggableId = 'card1';
  //   const source = { droppableId: 'list1', index: 0 };
  //   const destination = { droppableId: 'list2', index: 1 };
  //   const result = { source, destination, draggableId };

  //   // Simulate drag and drop
  //   fireEvent.dragEnd(getByTestId('board'), { result });

  //   // Check if moveCardToList action is dispatched
  //   expect(store.dispatch).toHaveBeenCalledWith(moveCardToList(source.droppableId, draggableId, destination.droppableId, destination.index));
  // });

});
