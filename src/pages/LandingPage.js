import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Styacation | Home";
    window.scrollTo(0, 0);

    // if (!this.props.page.landingPage)
    //   this.props.fetchPage(
    //     `https://admin-bwamern.herokuapp.com/api/v1/member/landing-page`,
    //     "landingPage"
    //   );

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Fade>
          <Header {...this.props}></Header>
        </Fade>
        <Fade bottom>
          <Hero
            refMostPicked={this.refMostPicked}
            data={page.landingPage.hero}
          />
        </Fade>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Fade bottom>
          <Testimony data={page.landingPage.testimonial} />
        </Fade>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
