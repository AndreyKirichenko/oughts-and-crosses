import React from 'react';
import { Link } from 'react-router-dom';

const PageStart = () => {
  return (
    <div className='page'>
      <div className='page__content'>
        <h1>
          Oughts and crosses!
        </h1>

        <ul className='menu'>
          <li className='menu__item'>
            <Link to='/pick' className='menu__link'>
              New game
            </Link>
          </li>

          <li className='menu__item'>
            <Link to='/game' className='menu__link'>
              Continue
            </Link>
          </li>

          <li className='menu__item'>
            <Link to='/score' className='menu__link'>
              Score
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageStart;
