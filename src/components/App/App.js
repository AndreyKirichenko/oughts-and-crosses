import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageStart from '../PageStart';
import PageGame from '../PageGame';
import PageFinish from '../PageFinish';

import ErrorBoundary from '../ErrorBoundary';

class App extends Component {
  render() {
    return (
      <Provider>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/' component={PageStart} />
              <Route path='/game' component={PageGame} />
              <Route path='/finish' component={PageFinish} />
              <h1>My React App!</h1>
            </Switch>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;