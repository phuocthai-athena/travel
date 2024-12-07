import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "../container/trangchu/banner/Banner";
// import TravelGuide from "../container/trangchu/travel-guide/TravelGuide";
// import CreateTour from "../container/trangchu/createTour/CreateTour";
import DomesticTour from "../container/trangchu/domestic-tour/DomesticTour";
import OverseasTour from "../container/trangchu/overseas-tour/OverseasTour";
import News from "../container/trangchu/news/News";
import CustomerReviews from "../container/trangchu/customer-reviews/CustomerReviews";
import Service from "../container/trangchu/service/Service";
import Footer from "../container/trangchu/footer/Footer";
export class Trangchu extends Component {
  render() {
    return (
      <div>
        <Banner />
        {/* <TravelGuide /> */}
        {/* <CreateTour /> */}
        <DomesticTour />
        <OverseasTour />
        <Service />
        <News />
        <CustomerReviews />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trangchu);
