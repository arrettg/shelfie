import React, { Component } from "react";
import Axios from "axios";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  //   componentDidMount() {
  //     Axios.get("/api/products")
  //       .then(respone => {
  //         this.setState({ products: respone.data });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         this.setState({
  //           error: "erros EVERYWHERE"
  //         });
  //       });
  //   }
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <img src={this.props.img} alt={this.props.name} />
        <p>{this.props.price}</p>
        <button>Delete</button>
        <button>Edit</button>
      </li>
    );
  }
}
