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

export default function SortSelector({handleSort}) {
  const classes = useStyles();

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Sort by</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em onClick={() =>handleSort('name','asc')}>None</em>
          </MenuItem>
          <ListSubheader>Ascending</ListSubheader>
          <MenuItem value={1} onClick={() =>handleSort('name','asc')}>Name</MenuItem>
          <MenuItem value={2} onClick={() =>handleSort('count','asc')}>Items Count</MenuItem>
          <ListSubheader>Descending</ListSubheader>
          <MenuItem value={3} onClick={() =>handleSort('name','desc')}>Name</MenuItem>
          <MenuItem value={4} onClick={() =>handleSort('count','desc')}>Items Count</MenuItem>
        </Select>
        {/* Selecting values for sorting */}
      </FormControl>
    </div>
  );
}