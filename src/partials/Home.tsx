import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { useDebounce } from 'use-debounce/lib';

import { MapDispatchToProps } from '../utils/props';
import * as countriesActions from '../redux/actions/countries';
import Container from '../components/Container';
import Preloader from '../components/Preloader';
import Error from '../components/Error';
import CountriesList from '../components/CountriesList';
import SearchInput from '../components/SearchInput';

import { useGetCountries } from '../hooks/countries/useGetCountries';

import { prepareString } from '../utils/string';

function Home({ saveContries, countriesState }: any) {
  const { loading, data, error } = useGetCountries();
  const [searchText, setSearchText] = useState('');

  const [search] = useDebounce(searchText, 300);

  useEffect(() => {
    if (data) {
      saveContries(data.Country);
    }
  }, [data]);

  function handleChangeSearch(value: string) {
    setSearchText(value);
  }

  function filterCountries(values: Array<any>, value?: string) {
    if (!values) {
      return [];
    }

    if (!value) {
      return values;
    }

    const valueSearch = prepareString(value);

    // eslint-disable-next-line max-len
    return values.filter((item: any) => prepareString(item.name).includes(valueSearch) || prepareString(item.capital).includes(valueSearch));
  }

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
          <>
            <SearchInput onChange={handleChangeSearch} />
            <CountriesList countries={filterCountries(countriesState, search)} />
          </>
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
