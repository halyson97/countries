import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Lottie from 'react-lottie';

import { Link } from 'react-router-dom';
import animationData from './server.json';

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 170,
  },
  card: {
    padding: '30px',
    maxWidth: '90%',
    boxSizing: 'border-box',
    borderRadius: '8px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    fontSize: '1.2rem',
    paddingBottom: '10px',
    justifyContent: 'center',
  },
  button: {
    marginTop: '15px',
    justifySelf: 'center',
    alignSelf: 'center',
    margin: 'auto',
  },
}));

const News: React.FC = () => {
  const classes = useStyles();

  const getOptions = () => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.title}>Página em construção</div>
        <Lottie
          options={getOptions()}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />

        <Link to="/" className={classes.button}>
          <Button variant="contained" type="submit" color="primary">
            Voltar a tela principal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default News;
