import React from 'react';
import { Link } from 'react-router-dom';

import Picker from '../Picker';

const PagePicker = () => {
  return (
    <div className='page'>
      <div className='page__content'>
        <h1>Pick your figure!</h1>

        <p>
          Cross go first.
        </p>

        <Picker/>

        <ul className='menu'>
          <li className='menu__item'>
            <Link to='/' className='menu__link'>
              back to menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PagePicker;
