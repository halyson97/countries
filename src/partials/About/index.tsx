import React, { useEffect } from 'react';

import {
  useParams,
} from 'react-router-dom';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../../utils/props';
import * as countriesActions from '../../redux/actions/countries';

import Container from '../../components/Container';
import Preloader from '../../components/Preloader';
import Error from '../../components/Error';
import CountryAbout from '../../components/CountryAbout';

import { useGetCountry } from '../../hooks/countries/useCountries';

function About({ countrySelected, saveContry }: any) {
  const { name }: any = useParams();
  const { loading, data, error } = useGetCountry(name);

  useEffect(() => {
    if (data) {
      saveContry(data.Country[0]);
    }
  }, [data]);

  console.log(data);

  return (
    <Container>
      {
        loading && <Preloader />
      }

      {
        error && <Error error={error} />
      }
      {
        countrySelected
        && <CountryAbout country={countrySelected} />
      }

    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  countrySelected: state.countries.country,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(About);
