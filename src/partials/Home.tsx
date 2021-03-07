import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../utils/props';
import * as countriesActions from '../redux/actions/countries';
import Container from '../components/Container';
import Preloader from '../components/Preloader';
import Error from '../components/Error';
import CountriesList from '../components/CountriesList';

import { useGetCountries } from '../hooks/countries/useGetCountries';

function Home({ saveContries, countriesState }: any) {
  const { loading, data, error } = useGetCountries();

  useEffect(() => {
    if (data) {
      saveContries(data.Country);
    }
  }, [data]);

  return (
    <Container>
      {
        loading && <Preloader />
      }

      {
        error && <Error error={error} />
      }

      {
        !loading
        && countriesState
        && (
        <CountriesList countries={countriesState} />
        )
      }
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  countriesState: state.countries.countries,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(Home);
