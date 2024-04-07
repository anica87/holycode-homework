import * as types from '../constants/ActionTypes'

const initialState = ''

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return action.data
    default:
      return state
  }
}

export default search
