import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SortSelector() {
  const classes = useStyles();

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Sort by</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Ascending</ListSubheader>
          <MenuItem value={1}>Name</MenuItem>
          <MenuItem value={2}>Items Count</MenuItem>
          <ListSubheader>Descending</ListSubheader>
          <MenuItem value={3}>Name</MenuItem>
          <MenuItem value={4}>Items Count</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}