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

import { useGetCountry } from '../../hooks/countries/useCountries';

function About({ saveContry }: any) {
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

    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  countrySelected: state.countries.country,
});

export default connect(mapStateToProps, MapDispatchToProps({
  ...countriesActions,
}))(About);
