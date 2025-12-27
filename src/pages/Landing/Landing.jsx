import React from "react";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import LayOut from "../../Components/Layout/LayOut";
import Product from "../../Components/Product/Products";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
