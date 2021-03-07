import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    margin: 'auto',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 170,
  },
}));

interface ComponentProps{
    children: any;
}

function Container({ children }: ComponentProps) {
  const classes = useStyles();
  return (
    <div className={classes.container}>{children}</div>
  );
}

export default Container;
