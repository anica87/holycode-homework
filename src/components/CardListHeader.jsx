import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardListHeader as StyledCardListHeader } from '../styles/CardList.styles';
import IconButton from './IconButton';
import { FormModal } from './Modal';

const CardListHeader = props => {
  const [open, setModal] = useState(false);

  const onSubmit = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <StyledCardListHeader>
        <div> {`${props.listName}`}</div>
        <div>{`(${props.cardsNumber})`}</div>

        <IconButton.ButtonContainer
          $top="4px"
        >
          <IconButton
            onClick={onSubmit}
            iconType="add"
          />
        </IconButton.ButtonContainer>
      </StyledCardListHeader>

      {open && (
      <FormModal
        handleClose={closeModal}
        onConfirm={props.onAddCard}
        placeholder="Enter ticket content"
        focusPlaceholder="Enter ticket content"
        darkFont
        width="auto"
        gray
      />
      )}
    </>
  );
};

CardListHeader.propTypes = {
  listName: PropTypes.string,
  cardsNumber: PropTypes.number,
  onAddCard: PropTypes.func,
};

export default CardListHeader;
