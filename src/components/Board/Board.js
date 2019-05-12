import React from 'react';

const Board = (props) => {
  const fields = [
    {
      x: 0,
      y: 0,
      value: null,
    },
    {
      x: 1,
      y: 0,
      value: null,
    },
    {
      x: 2,
      y: 0,
      value: null,
    },
    {
      x: 0,
      y: 1,
      value: null,
    },
    {
      x: 1,
      y: 1,
      value: 'ought',
    },
    {
      x: 2,
      y: 1,
      value: 'cross',
    },
    {
      x: 0,
      y: 2,
      value: null,
    },
    {
      x: 1,
      y: 2,
      value: null,
    },
    {
      x: 2,
      y: 2,
      value: null,
    },
  ];

  const getFields = () => {
    return fields.map((field) => {
      let className = 'board__field';

      const { x, y, value } = field;

      if (value) {
        className += ` board__field--${value}`;
      }
      return (
        <div className={className} key={`${x}=${y}`} />
      );
    });
  };

  return (
    <div className='board board--game'>
      {getFields()}
    </div>
  );
};

export default Board;
