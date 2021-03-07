import React from 'react';

import { makeStyles } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './error.json';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

function Error({ error }: any) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={300}
        width={300}
        isStopped={false}
        isPaused={false}
      />
      {error.message}
    </div>
  );
}

export default Error;
