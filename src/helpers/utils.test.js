import { describe, it, expect } from 'vitest'
import { findListIndexAndListById } from './utils' // Adjust the import path as needed

describe('findListIndexAndListById', () => {
  it('should return the correct index and list object for a given list ID', () => {
    // Sample data
    const lists = [
      { id: '1', name: 'List 1' },
      { id: '2', name: 'List 2' },
      { id: '3', name: 'List 3' },
    ]

    // Call the function with a list ID
    const { index, list } = findListIndexAndListById(lists, '2')

    // Assert the results
    expect(index).toBe(1) // Index of the list with ID '2' should be 1
    expect(list).toEqual({ id: '2', name: 'List 2' }) // The list object should match
  })

  // Add more test cases if needed
})
