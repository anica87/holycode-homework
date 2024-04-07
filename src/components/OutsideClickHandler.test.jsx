import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import OutsideClickHandler from './OutsideClickHandler';

describe('<OutsideClickHandler />', () => {
  it('should call onClickOutside when clicked outside', () => {
    const onClickOutside = vi.fn();

    const { container } = render(
      <OutsideClickHandler onClickOutside={onClickOutside}>
        <div>Inside</div>
      </OutsideClickHandler>
    );

    fireEvent.click(document.body); // Simulate click outside

    expect(onClickOutside).toHaveBeenCalled();
  });

  it('should not call onClickOutside when clicked inside', () => {
    const onClickOutside = vi.fn();

    const { getByText } = render(
      <OutsideClickHandler onClickOutside={onClickOutside}>
        <div>Inside</div>
      </OutsideClickHandler>
    );

    fireEvent.click(getByText('Inside')); // Simulate click inside

    expect(onClickOutside).not.toHaveBeenCalled();
  });

  it('should call onClickInside when clicked inside', () => {
    const onClickInside = vi.fn();

    const { getByText } = render(
      <OutsideClickHandler onClickInside={onClickInside}>
        <div>Inside</div>
      </OutsideClickHandler>
    );

    fireEvent.click(getByText('Inside')); // Simulate click inside

    expect(onClickInside).toHaveBeenCalled();
  });

  it('should not call onClickInside when clicked outside', () => {
    const onClickInside = vi.fn();

    const { container } = render(
      <OutsideClickHandler onClickInside={onClickInside}>
        <div>Inside</div>
      </OutsideClickHandler>
    );

    fireEvent.click(document.body); // Simulate click outside

    expect(onClickInside).not.toHaveBeenCalled();
  });

});
