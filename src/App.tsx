import React from 'react';

import { connect } from 'react-redux';

import { MapDispatchToProps } from './utils/props';
import * as countriesActions from './redux/actions/countries';

function App(props: any) {
  console.log(props);
  return (
    <div>Hello world</div>
  );
}

const mapStateToProps = (state: any) => ({
  countriesState: state.countries,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(App);
