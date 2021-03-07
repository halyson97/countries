import React from 'react';
import { makeStyles } from '@material-ui/core';

import CountryItem from '../CountryItem';

const useStyles = makeStyles(() => ({
  root: {
    width: '600px',
    boxSizing: 'border-box',
    maxWidth: '90%',
  },
}));

const CountriesList: React.FC<any> = ({ countries }: any) => {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      {countries.map((country: any) => (

        <CountryItem country={country} key={country.name} />

      ))}
    </div>
  );
};

export default CountriesList;
