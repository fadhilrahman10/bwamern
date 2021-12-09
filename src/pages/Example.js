import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";
import InputNumber from "elements/Form/InputNumber";

export default class Example extends Component {
  state = {
    value: 1,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // const breadcrumb = [
    //   { pageTitle: "Home", pageHref: "" },
    //   { pageTitle: "House Details", pageHref: "" },
    // ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <Breadcrumb data={breadcrumb} /> */}
            <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
