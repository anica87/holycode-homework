import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import configureStore from 'redux-mock-store'; 
import Header from './Header'; 
import { setSearch } from '../redux/actions/searchActions'; 

const mockStore = configureStore([]);
let store;

describe('<Header />', () => {
  beforeEach(() => {
    store = mockStore({
      search: '', // Initial state of the search reducer
    });
    store.dispatch = vi.fn(); // Spy on store's dispatch method
  });

  it('renders the search input', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getByPlaceholderText('Search tickets...')).toBeInTheDocument();
  });

  it('updates search value on input change and dispatches action', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const searchInput = getByPlaceholderText('Search tickets...');
    const newValue = 'new search value';

    // Simulate user typing in the search input
    fireEvent.change(searchInput, { target: { value: newValue } });

    // Check if the setSearch action is dispatched with the new value
    expect(store.dispatch).toHaveBeenCalledWith(setSearch(newValue));
  });
})