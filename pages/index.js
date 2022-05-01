import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components/index.js";
const index = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many kinds</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default index;
