import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";

import moment from "moment";
import Moment from "react-moment";

const ListingTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: "14pt"
  },
  body: {
    fontSize: "12pt"
  }
}))(TableCell);

const styles = withStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}));

const ListingsTable = function(props) {
  const [rows, setRows] = useState([]);

  const { state } = useContext(UserContext);

  const loadListings = () => {
    console.log(state);
    API.listingsFindAll(state.currentUser)
      .then(res => setRows(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadListings();
  }, []);
  if (!state.currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <ListingTableCell align="center">Listed</ListingTableCell>
            <ListingTableCell align="center">Available</ListingTableCell>
            <ListingTableCell align="center">Address</ListingTableCell>
            <ListingTableCell align="center">Beds</ListingTableCell>
            <ListingTableCell align="center">Baths</ListingTableCell>
            <ListingTableCell align="center">Size</ListingTableCell>
            <ListingTableCell align="center">Monthly Rent</ListingTableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {rows.map(row => (
            <TableRow className={props.classes.row} key={row.id}>
              <ListingTableCell align="center">
                <Moment format="MMMM Do YYYY">{moment(row.createdAt)}</Moment>
              </ListingTableCell>
              <ListingTableCell align="center">
                <Moment format="MMMM Do YYYY">
                  {moment(row.createdAt).add(Math.random() * 7, "day")}
                </Moment>
              </ListingTableCell>
              <ListingTableCell align="center">{row.address}</ListingTableCell>
              <ListingTableCell align="center">{row.beds}</ListingTableCell>
              <ListingTableCell align="center">{row.baths}</ListingTableCell>
              <ListingTableCell align="center">{row.size}</ListingTableCell>
              <ListingTableCell align="center">
                {row.rentPrice}
              </ListingTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

ListingsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default styles(ListingsTable);
