import React from 'react';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../utils/props';
import * as countriesActions from '../redux/actions/countries';
import Container from '../components/Container';
import Preloader from '../components/Preloader';
import Error from '../components/Error';

import { useGetCountries } from '../hooks/countries/useGetCountries';

function Home() {
  const { loading, data, error } = useGetCountries();
  console.log(data);
  console.log('isloading', loading);
  console.log('error: ', error);
  return (
    <Container>
      {
        loading && <Preloader />
      }

      {
        error && <Error error={error} />
      }

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
