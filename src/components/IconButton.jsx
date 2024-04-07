import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 22px;
  height: 22px;
  padding: 0;
  border-radius: 3px;
  color: ${props => props.theme.whiteIcon};
  opacity: ${props => props.disabled ? '0.5' : '1'};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: ${props => props.$top || '2px'};
  right: ${props => props.$right || '3px'};
`;

const getIconForType = type => {
  switch (type) {
    case 'delete':
      return faTimes;
    case 'add':
      return faPlus;
    default:
      return null;
  }
};

const IconButton = ({iconType, ...props}) => {
  return (
    <Button {...props}>
      <FontAwesomeIcon icon={getIconForType(iconType)} />
    </Button>
  );
};
IconButton.propTypes = {
  iconType: PropTypes.oneOf(['delete', 'add']),
};
IconButton.ButtonContainer = ButtonContainer;

export default IconButton;
