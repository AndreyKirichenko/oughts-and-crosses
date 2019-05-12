import React from 'react';

import Board from '../Board';
import { Link } from 'react-router-dom';

const PageGame = () => {
  return (
    <div className='page'>
      <div className='page__content'>
        <h1>User play cross</h1>



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

export default PageGame;
