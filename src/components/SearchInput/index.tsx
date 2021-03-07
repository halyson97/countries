import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '600px',
    maxWidth: '90%',
  },
  paper: {
    width: '100%',
    display: 'flex',
    padding: '2px 4px',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

interface SearchInputProps {
    onChange: Function
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange } : SearchInputProps) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>

      <Paper onSubmit={submitForm} component="form" className={classes.paper}>
        <InputBase
          className={classes.input}
          placeholder="Encontre o seu país"
          inputProps={{ 'aria-label': 'Encontre o seu país' }}
          onChange={handleChange}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
