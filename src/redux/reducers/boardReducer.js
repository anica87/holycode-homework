import * as types from '../constants/ActionTypes'
import * as BoardHelper from '../../helpers/boardHelper'
import { randomId, findListIndexAndListById } from '../../helpers/utils'
import mockData from '../../helpers/mockData'

const initialState = {
  lists: mockData,
}

const board = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,
        lists: state.lists.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list
          }
          return {
            ...list,
            cards: [
              ...list.cards,
              {
                id: randomId(),
                content: action.data.cardContent,
              },
            ],
          }
        }),
      }

    case types.REMOVE_CARD:
      return {
        ...state,
        lists: state.lists.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list
          }
          const newCards = [...list.cards]
          newCards.splice(action.data.cardIndex, 1)
          return {
            ...list,
            cards: newCards,
          }
        }),
      }
    case types.SET_CARD_CONTENT:
      return {
        ...state,
        lists: state.lists.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list
          }
          return {
            ...list,
            cards: list.cards.map((card, cardIndex) => {
              if (cardIndex !== action.data.cardIndex) {
                return card
              }
              return {
                ...card,
                content: action.data.content,
              }
            }),
          }
        }),
      }

    case types.RE_ORDER_LIST: {
      const listIndex = state.lists.findIndex(
        (list) => list.id === action.data.listId,
      )
      const list = state.lists[listIndex]
      const orderedListCards = BoardHelper.reOrderList(
        list.cards,
        action.data.cardSourceIndex,
        action.data.cardDestinationIndex,
      )
      newState = [...state.lists]
      newState[listIndex] = {
        ...newState[listIndex],
        cards: orderedListCards,
      }
      return {
        ...state,
        lists: newState,
      }
    }

    case types.MOVE_CARD_TO_LIST: {
      const { index: sourceListIndex, list: sourceList } =
        findListIndexAndListById(state.lists, action.data.sourceListId)
      const { index: destinationListIndex, list: destinationList } =
        findListIndexAndListById(state.lists, action.data.destinationListId)
      const cardSourceIndex = sourceList.cards.findIndex(
        (item) => item.id === action.data.cardId,
      )

      const { newSourceList, newDestinationList } = BoardHelper.moveCardToList(
        sourceList.cards,
        destinationList.cards,
        cardSourceIndex,
        action.data.cardDestinationIndex,
      )

      // Update state lists with new source and destination lists
      const updatedLists = state.lists.map((list, index) => {
        if (index === sourceListIndex) {
          return { ...list, cards: newSourceList }
        } else if (index === destinationListIndex) {
          return { ...list, cards: newDestinationList }
        }
        return list
      })

      return {
        ...state,
        lists: updatedLists,
      }
    }

    default:
      return state
  }
}

export default board
