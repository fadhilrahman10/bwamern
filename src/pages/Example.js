import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";
import InputNumber from "elements/Form/InputNumber";
import Numbering from "elements/Stepper/Numbering";
import Completed from "parts/Checkout/Completed";

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

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        // content: (
        //   // <BookingInformation
        //   //   data={data}
        //   //   checkout={checkout}
        //   //   ItemDetails={ItemDetails}
        //   //   onChange={this.onChange}
        //   // />
        // ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        // content: (
        //   // <Payment
        //   //   data={data}
        //   //   ItemDetails={ItemDetails}
        //   //   checkout={checkout}
        //   //   onChange={this.onChange}
        //   // />
        // ),
      },
      completed: {
        titel: "Yay! Completed",
        description: null,
        // content: <Completed />,
      },
    };

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <Breadcrumb data={breadcrumb} /> */}
            {/* <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            {/* <Numbering
              data={steps}
              current={"1"}
              style={{ marginBottom: 50 }}
            /> */}
            <Completed />
          </div>
        </div>
      </div>
    );
  }
}
