import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      image_url: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          axios.post("/api/products", {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url
          });
        }}
      >
        Name{" "}
        <input
          name="name"
          placeholder="product"
          onChange={this.handleChange}
          value={this.state.name}
        />
        Price{" "}
        <input
          id="input"
          name="price"
          placeholder="price"
          onChange={this.handleChange}
          value={this.state.price}
        />
        Image
        <input
          id="input"
          name="img"
          placeholder="image"
          onChange={this.handleChange}
          value={this.state.image_url}
        />
      </form>
    );
  }
}
