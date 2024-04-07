import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Modal}  from './Modal';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';


describe('<Modal />', () => {
  let handleCloseFn;
  let onConfirmFn;
  
  beforeEach(() => {
    handleCloseFn = vi.fn();
    onConfirmFn = vi.fn();
  });

  it('renders modal with correct title and placeholders', () => {
    const { getByText, getByPlaceholderText } = render(
        <ThemeProvider theme={theme}>
        <Modal 
            handleClose={handleCloseFn} 
            onConfirm={onConfirmFn} 
            focusPlaceholder="Focus placeholder" 
            placeholder="Placeholder" 
        />
      </ThemeProvider>
    );

    expect(getByText('Add ticket')).toBeInTheDocument();
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const { getByPlaceholderText } = render(
      <Modal 
        handleClose={handleCloseFn} 
        onConfirm={onConfirmFn} 
        focusPlaceholder="Focus placeholder" 
        placeholder="Placeholder" 
      />
    );

    const inputElement = getByPlaceholderText('Placeholder');
    fireEvent.change(inputElement, { target: { value: 'Test input' } });

    expect(inputElement).toHaveValue('Test input');
  });

  it('submits form and calls onConfirm', () => {
    const { getByText, getByPlaceholderText  } = render(
      <Modal 
        handleClose={handleCloseFn} 
        onConfirm={onConfirmFn} 
        focusPlaceholder="Focus placeholder" 
        placeholder="Placeholder" 
      />
    );

    const inputElement = getByPlaceholderText('Placeholder');
    fireEvent.change(inputElement, { target: { value: 'Test input' } });

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(onConfirmFn).toHaveBeenCalled();
  });

  it('cancels form and calls handleClose', () => {
    const { getByText } = render(
      <Modal 
        handleClose={handleCloseFn} 
        onConfirm={onConfirmFn} 
        focusPlaceholder="Focus placeholder" 
        placeholder="Placeholder" 
      />
    );

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(handleCloseFn).toHaveBeenCalledWith(false);
  });
});
