import React from 'react';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../utils/props';
import * as countriesActions from '../redux/actions/countries';
import Container from '../components/Container';

function Home() {
  return (
    <Container>
      <div>Partial home</div>
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  countriesState: state.countries,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(Home);
