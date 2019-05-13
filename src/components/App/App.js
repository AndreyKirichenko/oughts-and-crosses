import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import store from '../../store';

import PageStart from '../PageStart';
import PagePicker from '../PagePicker';
import PageGame from '../PageGame';
import PageScore from '../PageScore';

import ErrorBoundary from '../ErrorBoundary';

store.subscribe(() => {
  const stateToPersist = JSON.stringify(store.getState());
  window.localStorage.setItem('state', stateToPersist);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/' component={PageStart} exact />
              <Route path='/pick' component={PagePicker} />
              <Route path='/game' component={PageGame} />
              <Route path='/score' component={PageScore} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;