import React from 'react';
import { gameLoop, userTurn } from '../../actions';
import { connect } from 'react-redux';

const Board = (props) => {
  // console.log(props);
  const { board, userTurn } = props;

  const turn = (turnData) => {
    console.log();
    userTurn(turnData);
  };

  const getFields = () => {
    return board.map((field) => {
      let className = 'board__field';

      const { x, y, value } = field;

      if (value) {
        className += ` board__field--${value}`;
      }

      return (
        <div
          className={className}
          key={`${x}=${y}`}
          onClick={() => { turn({ x, y }); }}
        />
      );
    });
  };

  return (
    <div className='board board--game'>
      {getFields()}
    </div>
  );
};

const mapStateToProps = ({ game: { board } }) => {
  return {
    board,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // gameLoop: () => dispatch(gameLoop(dispatch)),
    userTurn: (turnData) => dispatch(userTurn(dispatch, turnData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
