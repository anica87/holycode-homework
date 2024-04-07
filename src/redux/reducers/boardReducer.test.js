import * as types from '../constants/ActionTypes'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import board from './boardReducer'
import mockData from '../../helpers/mockData'

describe('board reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      lists: mockData,
    }
  })

  it('should return the initial state', () => {
    const action = { type: 'UNKNOWN_ACTION' }
    const newState = board(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('should handle ADD_CARD', () => {
    const cardContent = 'New card content'
    const listIndex = 0
    const action = {
      type: types.ADD_CARD,
      data: {
        listIndex,
        cardContent,
      },
    }
    const expectedState = {
      ...initialState,
      lists: [
        {
          ...initialState.lists[0],
          cards: [
            ...initialState.lists[0].cards,
            { id: expect.any(String), content: cardContent },
          ],
        },
        ...initialState.lists.slice(1),
      ],
    }
    const newState = board(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it('should handle REMOVE_CARD', () => {
    const listIndex = 0
    const cardIndex = 1
    const action = {
      type: types.REMOVE_CARD,
      data: {
        listIndex,
        cardIndex,
      },
    }
    const expectedState = {
      ...initialState,
      lists: initialState.lists.map((list, index) => {
        if (index === listIndex) {
          return {
            ...list,
            cards: list.cards.filter((_, i) => i !== cardIndex),
          }
        }
        return list
      }),
    }
    const newState = board(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it('should handle SET_CARD_CONTENT', () => {
    const listIndex = 0
    const cardIndex = 1
    const newContent = 'Updated content'
    const action = {
      type: types.SET_CARD_CONTENT,
      data: {
        listIndex,
        cardIndex,
        content: newContent,
      },
    }
    const expectedState = {
      ...initialState,
      lists: initialState.lists.map((list, index) => {
        if (list.cards && index === listIndex) {
          return {
            ...list,
            cards: list.cards.map((card, i) =>
              i === cardIndex ? { ...card, content: newContent } : card,
            ),
          }
        }
        return list
      }),
    }
    const newState = board(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  // it('should handle RE_ORDER_LIST', () => {
  //   const listId = 'list1';
  //   const cardSourceIndex = 0;
  //   const cardDestinationIndex = 1;
  //   const action = {
  //     type: types.RE_ORDER_LIST,
  //     data: {
  //       listId,
  //       cardSourceIndex,
  //       cardDestinationIndex,
  //     },
  //   };
  //   const expectedState = {
  //     ...initialState,
  //     lists: initialState.lists.map(list => {
  //       if (list && list.cards && list.id === listId) {
  //         return {
  //           ...list,
  //           cards: BoardHelper.reOrderList(list.cards, cardSourceIndex, cardDestinationIndex),
  //         };
  //       }
  //       return list;
  //     }),
  //   };
  //   const newState = board(initialState, action);
  //   expect(newState).toEqual(expectedState);
  // });

  // it('should handle MOVE_CARD_TO_LIST', () => {
  //   const sourceListId = 'list1';
  //   const destinationListId = 'list2';
  //   const cardId = initialState.lists[0].cards[0].id;
  //   const cardDestinationIndex = 1;
  //   const action = {
  //     type: types.MOVE_CARD_TO_LIST,
  //     data: {
  //       sourceListId,
  //       destinationListId,
  //       cardId,
  //       cardDestinationIndex,
  //     },
  //   };

  //   // Mock the helper function
  //   const mockFindListIndexAndListById = vi.fn(() => ({
  //     index: 0, // Assume source list is at index 0
  //     list: initialState.lists[0], // Mock source list object
  //   }));
  //   // Stub the helper function
  //   const originalFindListIndexAndListById = findListIndexAndListById;
  //   findListIndexAndListById = mockFindListIndexAndListById;

  //   // Invoke the reducer
  //   const newState = board(initialState, action);

  //   // Restore the original function after the test
  //   findListIndexAndListById = originalFindListIndexAndListById;

  //   // Assertion
  //   expect(mockFindListIndexAndListById).toHaveBeenCalledWith(initialState.lists, sourceListId);
  //   // Write assertions for other expectations based on the action dispatched
  // });
})
