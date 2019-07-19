import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Form from "../Form/Form";
export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>SHELFIE</h2>
        <Link to="/">
          <button>Dashboard</button>
        </Link>
        <Link to="/form">
          <button>Add Inventory</button>
        </Link>
      </div>
    );
  }
}
