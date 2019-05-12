import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PageScore = (props) => {
  const { computer, user } = props.score;

  return (
    <div className='page'>
      <div className='page__content'>
        <h1>Game score</h1>
        <table className='table'>
          <tbody>
            <tr>
              <td className='table__cell'>Computer:</td>
              <td className='table__cell'>{computer}</td>
            </tr>
            <tr>
              <td className='table__cell'>User:</td>
              <td className='table__cell'>{user}</td>
            </tr>
          </tbody>
        </table>

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

const mapStateToProps = ({ score }) => {
  return {
    score,
  };
};

export default connect(mapStateToProps, null)(PageScore);
