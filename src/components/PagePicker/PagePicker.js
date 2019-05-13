import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import Picker from '../Picker';
import { fetchData } from '../../actions';
import withPage from '../HOC/withPage';
import {connect} from 'react-redux';

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData(dispatch)),
  };
};

export default compose(
  connect(null, mapDispatchToProps),
  withPage,
)(PagePicker);
