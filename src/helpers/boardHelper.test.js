import { describe, it, expect } from 'vitest'
import { reOrderList, moveCardToList } from './boardHelper'

describe('reOrderList function', () => {
  it('should reorder list correctly', () => {
    // Arrange
    const list = ['a', 'b', 'c', 'd']
    const startIndex = 0
    const endIndex = 2
    const expectedList = ['b', 'c', 'a', 'd']

    // Act
    const result = reOrderList(list, startIndex, endIndex)

    // Assert
    expect(result).toEqual(expectedList)
  })

  it('should handle startIndex equal to endIndex', () => {
    // Arrange
    const list = ['a', 'b', 'c', 'd']
    const startIndex = 1
    const endIndex = 1
    const expectedList = ['a', 'b', 'c', 'd']

    // Act
    const result = reOrderList(list, startIndex, endIndex)

    // Assert
    expect(result).toEqual(expectedList)
  })

  it('should handle startIndex greater than endIndex', () => {
    // Arrange
    const list = ['a', 'b', 'c', 'd']
    const startIndex = 3
    const endIndex = 1
    const expectedList = ['a', 'd', 'b', 'c']

    // Act
    const result = reOrderList(list, startIndex, endIndex)

    // Assert
    expect(result).toEqual(expectedList)
  })
})

describe('moveCardToList function', () => {
  it('should move card from source list to destination list correctly', () => {
    // Arrange
    const sourceList = ['a', 'b', 'c']
    const destinationList = ['x', 'y', 'z']
    const cardSourceIndex = 1
    const cardDestinationIndex = 2
    const expectedSourceList = ['a', 'c']
    const expectedDestinationList = ['x', 'y', 'b', 'z']

    // Act
    const result = moveCardToList(
      sourceList,
      destinationList,
      cardSourceIndex,
      cardDestinationIndex,
    )

    // Assert
    expect(result.newSourceList).toEqual(expectedSourceList)
    expect(result.newDestinationList).toEqual(expectedDestinationList)
  })
})
