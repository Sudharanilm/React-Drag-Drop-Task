// Column.js
import React from 'react';
import { useDrop} from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes'; // Import the ItemTypes.js file

const Column = ({ title, cards, onCardDrop }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onCardDrop(item.data.id),
  });

  return (
    <div ref={drop} className="column">
      <h2>{title}</h2>
      {cards.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Column;
