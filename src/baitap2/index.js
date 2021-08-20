import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";

function Baitap2() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Wwd />
          <Contact />
        </div>
        <ListCard />
      </div>

      <Footer />
    </>
  );
}

export default Baitap2;
