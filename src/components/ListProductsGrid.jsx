import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { useAxiosGet } from "../Hooks/HttpRequests";
// eslint-disable-next-line no-unused-vars
import Skeleton from "react-loading-skeleton";
import ProductCard from "./ProductCard";


export default class ListProductsGrid extends Component {
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
        {/* <h2>Product cards</h2> */}
        <div className="flex">
          {this.state.products.map((prd) => (
            <ProductCard key={prd.id} product={prd} />
          ))}
        </div>
      </div>
    );
  }
}
