import React, { Component } from "react";
import Product from "../Product/Product";
import Header from "../Header/Header";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4040/api/products`)
      .then(console.log(this.props))
      .catch(error => {
        console.log(error);
        this.setState({
          error: "errors EVERYWHERE"
        });
      });
  }
  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.products.map(recipe => (
            <Product />
          ))}
        </ul>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
