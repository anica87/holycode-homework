import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { CardListContainer, CardListWrapper } from '../styles/CardList.styles';
import CardListHeader from './CardListHeader';
import Card from './Card';


const getFilteredCards = (cards, searchText) => {
  if (searchText) {
    return cards.filter(card => card.content.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return cards;
};

const CardList = props => {

  const filteredCards = useMemo(() => 
  getFilteredCards(props.list.cards, props.searchText),
  [props.list.cards, props.searchText]);

  return (
    <CardListWrapper  data-testid="card-list">
      <CardListHeader
        listName={props.list.name}
        cardsNumber={props.list.cards.length} 
        onAddCard={props.onAddCard}
      />
      <Droppable droppableId={props.droppableId}>
        {(provided) => (
          <CardListContainer
            ref={provided.innerRef}
          >
            {filteredCards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                onChangeCardContent={content => props.onChangeCardContent(index, content)}
                onRemoveCard={() => props.onRemoveCard(index)}
              />
            ))}
            {provided.placeholder}
            
          </CardListContainer>
        )}
      </Droppable>
    </CardListWrapper>
  );
};

CardList.propTypes = {
  listName: PropTypes.string,
  list: PropTypes.object,
  searchText: PropTypes.string,
  onChangeCardContent: PropTypes.func,
  droppableId: PropTypes.string,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  colors: PropTypes.object,
};
export default CardList;
