import { describe, it, expect } from 'vitest'
import search from './searchReducer'
import * as types from '../constants/ActionTypes'

describe('board reducer', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual('')
  })

  it('should handle SET_SEARCH action', () => {
    const searchText = 'Example search text'
    const action = {
      type: types.SET_SEARCH,
      data: searchText,
    }
    expect(search('', action)).toEqual(searchText)
  })

  it('should ignore unknown actions', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
      data: 'Some data',
    }
    expect(search('initial state', action)).toEqual('initial state')
  })
})
