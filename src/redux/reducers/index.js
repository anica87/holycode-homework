import { combineReducers } from 'redux'
import board from './boardReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
  board,
  search,
})

export default rootReducer
