import React, { Component } from "react";
import { APP_API_URL, APP_API_PORT } from '../../Hooks/apiContants';

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    Width: 250,
  },
});

export default class ListTransactionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }
  async componentDidMount() {
    const url = APP_API_URL + ':' + APP_API_PORT + "/transaction/read"
    // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
    const res = await fetch(url);
    alert(res.message);
    
    const json = await res.json();
    alert(json.data.data)
    this.setState({ transactions: json });
  }
  render() {
    return ( this.state.transactions &&
      <div>
        <TableContainer component={Paper}>
          <Table
            className={useStyles.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Supplier</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Buyer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.transactions.map((trans) => (
                <TableRow key={trans._id}>
                  <TableCell>{trans.buyer}</TableCell>
                  <TableCell>€ {trans.price}</TableCell>
                  <TableCell>{trans.buyer}</TableCell>
                  <TableCell>{trans.buyer}</TableCell>
                  <TableCell>{trans.buyer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
