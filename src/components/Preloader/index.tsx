import React from 'react';

import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: 600,
    maxWidth: '90%',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffffdd',
    boxSizing: 'border-box',
    transition: '0.25s',
    borderRadius: '8px',

  },
}));

function Preloader() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
}

export default Preloader;
