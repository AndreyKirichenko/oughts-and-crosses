import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { pickCross, pickOught, startGame } from '../../actions/';

class Picker extends Component {

  state = {
    isPicked: false,
  };

  onCross = () => {
    this.props.pickCross();
    this.startGame();
  };

  onOught = () => {
    this.props.pickOught();
    this.startGame();
  };

  startGame() {
    this.props.startGame();

    this.setState({
      isPicked: true,
    });
  }

  render() {
    if(this.state.isPicked) {
      return <Redirect to='/game' />;
    }

    return (
      <div className='board board--picker'>
        <div
          className='board__field board__field--cross'
          onClick={this.onCross}
        />

        <div
          className='board__field board__field--ought'
          onClick={this.onOught}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  pickCross,
  pickOught,
  startGame,
};

export default connect(null, mapDispatchToProps)(Picker);
