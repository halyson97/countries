import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import animationData from './world.json';

const useStyles = makeStyles(() => ({
  root: {
    top: '0',
    width: '100%',
    height: '140px',
    display: 'flex',
    zIndex: 10,
    position: 'fixed',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#0e174d',
    justifyContent: 'space-around',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
    },
  },
  contentTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 400,
    marginLeft: 20,
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: 10,
    fontSize: '1.1rem',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>

      <Link to="/" className={classes.link}>
        <div className={classes.contentTitle}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={90}
            width={90}
            isStopped={false}
            isPaused={false}
          />
          <div className={classes.title}>Countries</div>
        </div>
      </Link>

      <div className={classes.links}>
        <Link to="/history" className={classes.link}>
          <div>Histórico</div>
        </Link>
        <Link to="/favorites" className={classes.link}>
          <div>Favoritos</div>
        </Link>

      </div>

    </header>
  );
};

export default Header;
