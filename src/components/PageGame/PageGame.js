import React from 'react';

import { connect } from 'react-redux';

import Board from '../Board';
import { Link } from 'react-router-dom';

const PageGame = (props) => {
  const { message } = props;

  return (
    <div className='page'>
      <div className='page__content'>
        <h1>Match!!!</h1>

        <p>{message}</p>

        <Board />

        <ul className='menu'>
          <li className='menu__item'>
            <Link to='/' className='menu__link'>
              continue this game later
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ game: { message } }) => {
  return {
    message,
  };
};

export default connect(mapStateToProps, null)(PageGame);
