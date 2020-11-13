import React, { Component } from "react";
import { APP_API_URL, APP_API_PORT } from "../../Hooks/apiContants";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormatDate from "../shared/FormatDate";
import { getFieldInJsonString, formatCurrencyEUR } from "../shared/SharedUtils";
import { ClockWinnerState } from "./actionServices/TypesAuction";

const useStyles = makeStyles({
  table: {
    Width: 250,
  },
});
function getSupplier(stringify) {
  // console.log("getSupplier:", stringify);
  const supplierLegalname = getFieldInJsonString(1, stringify);
  const supplierCode = getFieldInJsonString(0, stringify);
  const supplierCity = getFieldInJsonString(2, stringify);
  return {
    legalName: supplierLegalname,
    code: supplierCode,
    city: supplierCity,
  };
}
// product: "{id:1,code:'G127',descr:'Gerbere Milanesi ',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}"
function getProduct(stringify) {
  // console.log("getProduct:", stringify);
  const productId = getFieldInJsonString(0, stringify);
  const productCode = getFieldInJsonString(1, stringify);
  const productDescr = getFieldInJsonString(2, stringify);
  const productSize = getFieldInJsonString(3, stringify);
  const productImageurl = getFieldInJsonString(4, stringify);
  return {
    id: productId,
    code: productCode,
    descr: productDescr,
    size: productSize,
    imageurl: productImageurl,
  };
}

export const ListTransactionsTable = (props) => {
  console.log("listTransactionsTable props:", props);

  const [arrender, setArrender] = React.useState([]);

  /*     const url = APP_API_URL + ":" + APP_API_PORT + "/transaction/read";
  // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
  const res = await fetch(url);
  console.log(res);
  
  const json = await res.json();
  console.log(json);
  this.setState({ transactions: json });
  let arr = this.state.transactions.data;
  */
  React.useEffect(() => {
    let arr = [];
    if (props.items.length) {
      arr = props.items;
      console.log("state.transactions=", arr);
    } else {
      if (props.reduxTrans.length) {
        arr = props.reduxTrans;
        console.log("state.reduxtrans=", arr);
      }
    }
    // if (this.state.transactions) {
    if (arr.length) {
      console.log("this.state.transactions.data.length", arr.length);
      console.log("test supplier:", getSupplier(arr[0].supplier));
      // var l10nIT = new Intl.DateTimeFormat("it-IT");
      // console.log("test ",arr[0].createdAt, l10nIT.format(arr[0].createdAt));
      const arr2 = [];
      arr.forEach((element) => {
        const supplier = getSupplier(element.supplier);
        const buyer = element.buyer;
        const date = element.createdAt;
        const product = getProduct(element.product);
        const key = element._id;
        const redRow =
          element.state === ClockWinnerState.CANCELLED ? "bg-red-500" : "";
        arr2.push({ ...element, key, supplier, buyer, date, product, redRow });
      });
      console.log("render arr:", arr2);
      setArrender(arr2);
    }
    // return null
  }, []);
  /*
  buyer: "666"
  createdAt: "2020-11-01T22:32:49.817Z"
  price: "2580"
  product: "{id:1,code:'G127',descr:'Gerbere Milanesi ',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}"
state: "REGISTERED"
supplier: "{id:1,legalname:'Floreal Garofalo',city:'Pozzallo(RG)'}"
 */

  return (
    <>
      <div>
        {arrender && (
          // <div>
          // {this.state.arrender.map((item)=>(item.key))}
          // </div>
          <TableContainer component={Paper}>
            <Table className={useStyles.table} size="small" aria-label="">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Supplier</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Buyer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arrender.map((item) => (
                  <TableRow className={item.redRow} key={item.key}>
                    <TableCell>
                      <FormatDate
                        format="DD/MM/YYYY HH:mm"
                        dateToFormat={item.date}
                      />
                    </TableCell>
                    <TableCell>{item.supplier.legalName}</TableCell>
                    <TableCell>{item.product.descr}</TableCell>
                    <TableCell>{formatCurrencyEUR(item.price)}</TableCell>
                    <TableCell>{item.buyer}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};
export default ListTransactionsTable;
