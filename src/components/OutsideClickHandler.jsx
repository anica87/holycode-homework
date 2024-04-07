import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { randomId } from '../helpers/utils';

const OutsideClickHandler = ({ shouldListenClick = true, children, onClickInside,
  onClickOutside }) => {
  const id = randomId();

  const handleOutsideClick = useCallback(e => {
    if (!shouldListenClick) {
      return;
    }
    if (document.getElementById(id)
      && document.getElementById(id).contains(e.target)) {
      if (onClickInside) {
        onClickInside(e);
      }
    } else if (onClickOutside) {
      onClickOutside(e);
    }
  }, [id, onClickInside, onClickOutside, shouldListenClick]);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  return <div id={id}>{children}</div>;
};

OutsideClickHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.object]),
  onClickInside: PropTypes.func,
  onClickOutside: PropTypes.func,
  shouldListenClick: PropTypes.bool
};
export default OutsideClickHandler;
