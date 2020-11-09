import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// eslint-disable-next-line no-unused-vars
// import Skeleton from "react-loading-skeleton";
import ProductCard from "./ProductCard";

const useStyles = makeStyles({
  table: {
    Width: 250,
  },
});

export default class ListProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  async componentDidMount() {
    const url = "https://run.mocky.io/v3/a7d372ef-4a55-447d-9bb2-98c53fed94b3";
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    this.setState({ products: json });
  }
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table
            className={useStyles.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Categ.</TableCell>
                <TableCell align="right">Code</TableCell>
                <TableCell align="right">Label</TableCell>
                <TableCell align="right">Suggest Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.products.map((prd) => (
                <TableRow key={prd.id}>
                  <TableCell>categ</TableCell>
                  <TableCell>{prd.article.code}</TableCell>
                  <TableCell>{prd.article.item.translatedLabel}</TableCell>
                  <TableCell>€ 123,34</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
