import React from 'react';

import {
  useParams,
} from 'react-router-dom';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../../utils/props';
import * as countriesActions from '../../redux/actions/countries';

import Container from '../../components/Container';
import Preloader from '../../components/Preloader';
import Error from '../../components/Error';

import { useGetCountry } from '../../hooks/countries/useCountries';

function About() {
  const { name }: any = useParams();
  const { loading, data, error } = useGetCountry(name);

  console.log(data);

  return (
    <Container>
      {
        loading && <Preloader />
      }

      {
        error && <Error error={error} />
      }

    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  countriesState: state.countries.countries,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(About);
