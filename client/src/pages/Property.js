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
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";
import { primary } from "../colors";
const PropertyTableCell = withStyles(theme => ({
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
    marginBottom: theme.spacing.unit * 10,
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
const PropertyTable = function(props) {
  const [rows, setRows] = useState([]);
  const { state } = useContext(UserContext);
  const loadProperties = () => {
    console.log(state);
    API.tableFindAll(state.currentUser)
      .then(res => setRows(res.data))
      .catch(err => console.log(err));
  };
  const toggleList = (id, action) => {
    API.updateLeased({ id, action })
      .then(res => {
        loadProperties();
      })
      .catch(err => console.log(err));
    // console.log(id, action);
  };
  useEffect(() => {
    loadProperties();
  }, []);
  if (!state.currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableRow>
            <PropertyTableCell align="center">
              Property Address
            </PropertyTableCell>
            <PropertyTableCell align="center">Location</PropertyTableCell>
            <PropertyTableCell align="center">Company</PropertyTableCell>
            <PropertyTableCell align="center">Property Type</PropertyTableCell>
            <PropertyTableCell align="center">Listed</PropertyTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={props.classes.row} key={row.id}>
              <PropertyTableCell align="center">
                {row.address}
              </PropertyTableCell>
              <PropertyTableCell align="center">
                {row.location}
              </PropertyTableCell>
              <PropertyTableCell align="center">
                {row.companyName}
              </PropertyTableCell>
              <PropertyTableCell align="center">
                {row.propertyType}
              </PropertyTableCell>
              <PropertyTableCell align="center">
                {row.leased === false ? (
                  <Button
                    className={props.classes.button}
                    label="List"
                    color="primary"
                    onClick={() => toggleList(row.id, true)}
                  >
                    List
                  </Button>
                ) : (
                  <Button
                    label="Remove"
                    color="secondary"
                    onClick={() => toggleList(row.id, false)}
                  >
                    Remove
                  </Button>
                )}
              </PropertyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
PropertyTable.propTypes = {
  classes: PropTypes.object.isRequired
};
export default styles(PropertyTable);
