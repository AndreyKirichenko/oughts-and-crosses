import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { gameLoop, userTurn } from '../../actions';

const GAME_TIMEOUT = 1000;

const Board = (props) => {
  const { board, userTurn } = props;

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
          onClick={() => { userTurn({ x, y }); }}
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

class BoardContainer extends Component {
  componentDidMount() {
    this.interval = setTimeout(() => {
      this.props.gameLoop(this.props.game);
    }, GAME_TIMEOUT);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { userTurn } = this.props;

    const { board, isStarted } = this.props.game;


    if(!isStarted) {
      return <Redirect to='/pick' />;
    }

    return <Board board={board} userTurn={userTurn} />;
  }
}

const mapStateToProps = ({ game }) => {
  return {
    game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameLoop: (game) => dispatch(gameLoop(dispatch, game)),
    userTurn: (turnData) => dispatch(userTurn(turnData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
