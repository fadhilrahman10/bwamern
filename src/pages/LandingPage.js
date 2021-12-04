import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import landingPage from "json/landingPage.json";
import Fade from "react-reveal/Fade";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Fade>
          <Header {...this.props}></Header>
        </Fade>
        <Fade bottom>
          <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        </Fade>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Fade bottom>
          <Testimony data={landingPage.testimonial} />
        </Fade>
        <Footer />
      </>
    );
  }
}
