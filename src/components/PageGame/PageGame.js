import React from 'react';

import { connect } from 'react-redux';

import Board from '../Board';
import { Link } from 'react-router-dom';

const PageGame = (props) => {
  const { message, isFinished, isStarted } = props;

  const getPlayAgain = () => {
    if(isFinished) {
      return (
        <li className='menu__item'>
          <Link to='/pick' className='menu__link'>
            Play Again
          </Link>
        </li>
      );
    }
    return null;
  };

  const getContinueLater = () => {
    if(isStarted && !isFinished) {
      return (
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Continue later
          </Link>
        </li>
      );
    }
    return null;
  };

  return (
    <div className='page'>
      <div className='page__content'>
        <h1>Match!</h1>

        <p>{message}</p>

        <Board />

        <ul className='menu'>
          {getPlayAgain()}
          {getContinueLater()}
          <li className='menu__item'>
            <Link to='/Score' className='menu__link'>
              Score
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ game: { message, isStarted, isFinished } }) => {
  return {
    message,
    isFinished,
    isStarted,
  };
};

export default connect(mapStateToProps, null)(PageGame);
