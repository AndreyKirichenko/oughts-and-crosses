import React, { Component } from 'react';

const withPage = (Wrapped)  => {
  return class extends Component {
    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      return <Wrapped {...this.props} />;
    }
  };
};

export default withPage;