import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Link,
} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    margin: '20px 0px',
    padding: '20px',
    background: '#ffffffdd',
    boxSizing: 'border-box',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '0.25s',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#fff',
      transform: 'scale(1.02)',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#03a9f4',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: '100%',
  },
  contentCountry: {
    flex: '1',
    padding: '0px 20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    color: '#555',
  },
  name: {
    fontSize: '1.1rem',
  },
  capital: {
    fontSize: '1rem',
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9rem',
    padding: '10px',
    boxSizing: 'border-box',
    '@media (max-width: 700px)': {
      display: 'none',
    },
  },
  arrowIcon: {
    margin: '0px 7px',
  },
}));

const CountryItem: React.FC<{ country: any }> = ({ country }: { country: any }) => {
  const classes = useStyles();
  return (
    <Link to={`/countries/${country.name}`} className={classes.link}>
      <div className={classes.root}>
        <div>
          <img className={classes.image} src={country.flag.svgFile} alt={`Bandeira ${country.name}`} />
        </div>
        <div className={classes.contentCountry}>
          <div className={classes.name}>{country.name}</div>
          <div className={classes.capital}>{country.capital}</div>
        </div>
        <div className={classes.details}>
          Ver detalhes
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
