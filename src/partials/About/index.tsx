import React, { useEffect, useState } from 'react';

import {
  useParams,
} from 'react-router-dom';

import Modal from '@material-ui/core/Modal';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { MapDispatchToProps } from '../../utils/props';
import * as countriesActions from '../../redux/actions/countries';

import Container from '../../components/Container';
import Preloader from '../../components/Preloader';
import Error from '../../components/Error';
import CountryAbout from '../../components/CountryAbout';
import CountryEdit from '../../components/CountryEdit';

import { useGetCountry } from '../../hooks/countries/useCountries';

const useStyles = makeStyles(() => ({
  cardModal: {
    top: '50%',
    left: '50%',
    outline: '0',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  },
}));

function About({ countrySelected, saveContry }: any) {
  const classes = useStyles();
  const { name }: any = useParams();
  const { loading, data, error } = useGetCountry(name);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (data) {
      saveContry(data.Country[0]);
    }
  }, [data]);

  const enableEdit = () => {
    setIsEdit(true);
  };

  const disableEdit = () => {
    setIsEdit(false);
  };

  const submitEditForm = (values: any) => {
    setIsEdit(false);
    saveContry(values);
  };

  return (
    <Container>

      <Modal
        open={isEdit}
        onClose={disableEdit}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.cardModal}>
          <CountryEdit country={countrySelected} onCancel={disableEdit} onSubmit={submitEditForm} />
        </div>
      </Modal>

      {
        loading && <Preloader />
      }

      {
        error && <Error error={error} />
      }
      {
          !loading
        && countrySelected
        && <CountryAbout country={countrySelected} onEdit={enableEdit} />
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
