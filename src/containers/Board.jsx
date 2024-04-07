import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { BoardContainer } from '../styles/Board.styles';
import CardList from '../components/CardList';
import {
  addCard,
  removeCard,
  reOrderList,
  moveCardToList,
  setCardContent,
} from '../redux/actions/boardActions';

const Board = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const lists = useSelector(state => state.board.lists);

  const onDragEnd = result => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // Dropped in the same list
      dispatch(reOrderList(source.droppableId, source.index, destination.index));
    } else {
      // Drop in other list
      dispatch(moveCardToList(
        source.droppableId,
        draggableId,
        destination.droppableId,
        destination.index,

      ));
    }
  };
  return (
    <div>
      <BoardContainer data-testid="board">
        <DragDropContext onDragEnd={onDragEnd}>
          {lists.map((list, listIndex) => (
            <CardList
              listName={list.name}
              key={list.id}
              droppableId={list.id}
              list={list}
              onChangeCardContent={(cardIndex, content) => dispatch(setCardContent(listIndex,
                cardIndex, content))}
              onAddCard={cardContent => dispatch(addCard(listIndex, cardContent))}
              onRemoveCard={cardIndex => dispatch(removeCard(listIndex, cardIndex))}
              searchText={search}
            />
          ))}
        </DragDropContext>
      </BoardContainer>
    </div>
  );
};

export default Board;
