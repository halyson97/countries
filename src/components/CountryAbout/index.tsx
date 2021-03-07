import React from 'react';
import { makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
  root: {
    background: '#ffffff',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '0.25s',
    width: '600px',
    maxWidth: '90%',
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    color: '#03a9f4',
  },
  image: {
    width: 275,
    borderRadius: 8,
  },
  contentCountry: {
    flex: '1',
    padding: '0px 30px 0px 20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    color: '#555',
  },
  name: {
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  capital: {
    fontSize: '1rem',
    padding: '7px 0px',
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
  domain: {
    marginRight: 5,
  },
  contentEdit: {
    top: '0',
    right: '0',
    cursor: 'pointer',
    padding: '5px',
    position: 'absolute',
    boxSizing: 'border-box',
    color: '#03a9f4',
  },
}));

const CountryAbout: React.FC<any> = ({ country, onEdit }: any) => {
  const classes = useStyles();

  const formatNumber = (number?: number) => number?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div className={classes.root}>
      <img className={classes.image} src={country.flag.svgFile} alt={`Bandeira ${country.name}`} />
      <div className={classes.contentCountry}>
        <div className={classes.name}>{country.name}</div>
        <div className={classes.capital}>
          <span>Capital: </span>
          {country.capital ? country.capital : 'Não informado'}
        </div>
        <div className={classes.capital}>
          <span>Área: </span>
          {country.area ? `${formatNumber(country.area)} km²` : 'Não informado'}
        </div>
        <div className={classes.capital}>
          <span>População: </span>
          {country.population ? formatNumber(country.population) : 'Não informado'}
        </div>
        <div className={classes.capital}>
          <span>Domínio: </span>
          {country.topLevelDomains?.map((domain: any) => (
            <span key={domain.name} className={classes.domain}>{domain.name}</span>
          ))}
          {country.topLevelDomains?.length === 0
          && <span>Não informado</span>}
        </div>
      </div>

      <div className={classes.contentEdit}>
        <Tooltip title="Editar país">
          <EditIcon onClick={handleEdit} onKeyDown={handleEdit} />
        </Tooltip>
      </div>
    </div>
  );
};

export default CountryAbout;
