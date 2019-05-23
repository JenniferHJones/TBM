import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PropertyTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '90%',
    marginLeft: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const rows = [
    // get data from db to display on table.
];


function PropertyTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <PropertyTableCell align="center">Property Address</PropertyTableCell>
            <PropertyTableCell align="center">Location</PropertyTableCell>
            <PropertyTableCell align="center">Company</PropertyTableCell>
            <PropertyTableCell align="center">Property Type</PropertyTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id} >          
              <PropertyTableCell align="center">{"address"}</PropertyTableCell>
              <PropertyTableCell align="center">{"location"}</PropertyTableCell>
              <PropertyTableCell align="center">{"company"}</PropertyTableCell>
              <PropertyTableCell align="center">{"PropType"}</PropertyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

PropertyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PropertyTable);