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

const ListingTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
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
});

class ListingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  // loadProperties = () => {
  //   API.tableFindAll()
  //   .then(res =>
  //     this.setState({ rows: res.data})
  //   )
  //   .catch(err => console.log(err));
  // };

  // componentWillMount() {
  //   this.loadProperties();
  // }

  render() {
    return (
      <Paper >
        {/* className={classes.root} */}
        <Table >
        {/* className={classes.table} */}
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
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow className={this.state.rows} key={row.id}>
                <ListingTableCell align="center">{"List Date"}</ListingTableCell>
                <ListingTableCell align="center">{"Available Date"}</ListingTableCell>
                <ListingTableCell align="center">{"Address"}</ListingTableCell>
                <ListingTableCell align="center">{"Beds"}</ListingTableCell>
                <ListingTableCell align="center">{"Baths"}</ListingTableCell>
                <ListingTableCell align="center">{"Size"}</ListingTableCell>
                <ListingTableCell align="center">{"Monthly Rent"}</ListingTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ListingTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListingTable);
