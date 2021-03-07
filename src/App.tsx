import React from 'react';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MapDispatchToProps } from './utils/props';
import * as countriesActions from './redux/actions/countries';

import Home from './partials/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state: any) => ({
  countriesState: state.countries,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(App);
