import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import store from '../../store';

import PageStart from '../PageStart';
import PageGame from '../PageGame';
import PageFinish from '../PageFinish';

import ErrorBoundary from '../ErrorBoundary';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/' component={PageStart} />
              <Route path='/game' component={PageGame} />
              <Route path='/finish' component={PageFinish} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;