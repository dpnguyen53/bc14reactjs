import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="contents">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Baitap1;
