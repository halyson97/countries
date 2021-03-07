import React from 'react';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../utils/props';
import * as countriesActions from '../redux/actions/countries';
import Container from '../components/Container';

import { useGetCountries } from '../hooks/countries/useGetCountries';

function Home() {
  const { loading, data, error } = useGetCountries();
  console.log(data);
  console.log('isloading', loading);
  console.log('error: ', error);
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
