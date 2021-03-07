import React from 'react';

import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Container() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
}

export default Container;
