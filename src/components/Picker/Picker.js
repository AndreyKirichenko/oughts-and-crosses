import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { pickCross, pickOught } from '../../actions/';

class Picker extends Component {

  state = {
    isPicked: false,
  };

  onCross = () => {
    this.props.pickCross();

    this.setState({
      isPicked: true,
    });
  };

  onOught = () => {
    this.props.pickOught();

    this.setState({
      isPicked: true,
    });
  };

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
};

export default connect(null, mapDispatchToProps)(Picker);
