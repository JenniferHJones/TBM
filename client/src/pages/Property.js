import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { UserContext } from "../context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";

const PropertyTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
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

class PropertyTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  loadProperties = () => {
    API.tableFindAll()
      .then(res => 
        this.setState({ rows: res.data })
      )
      .catch(err => console.log(err));
  };

  componentWillMount() {
    this.loadProperties();
  }

  render() {
    console.log(this.props)
    return (
      <Paper className={this.props.classes.root}> 
        <Table className={this.props.classes.table} >
          <TableHead>
            <TableRow>
              <PropertyTableCell align="center">Property Address</PropertyTableCell>
              <PropertyTableCell align="center">Location</PropertyTableCell>
              <PropertyTableCell align="center">Company</PropertyTableCell>
              <PropertyTableCell align="center">Property Type</PropertyTableCell>
            </TableRow>
          </TableHead>
          <TableBody stripedRows>
            {this.state.rows.map(row => (
              <TableRow className={this.props.classes.row} key={row.id} >
                <PropertyTableCell align="center">{row.address}</PropertyTableCell>
                <PropertyTableCell align="center">{row.location}</PropertyTableCell>
                <PropertyTableCell align="center">{row.companyName}</PropertyTableCell>
                <PropertyTableCell align="center">{row.propertyType}</PropertyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PropertyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default styles(PropertyTable);