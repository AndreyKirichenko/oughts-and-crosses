import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import withPage from '../HOC/withPage';
import { fetchData } from '../../actions';


const PageStart = (props) => {
  const getContinue = () => {
    const { isFinished, isStarted } = props.game;



    if(isStarted && !isFinished) {
      return (
        <li className='menu__item'>
          <Link to='/game' className='menu__link'>
            Continue
          </Link>
        </li>
      );
    }

    return null;
  };

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

          {getContinue()}

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

const mapStateToProps = ({ game }) => {
  return {
    game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData(dispatch)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPage,
)(PageStart);
