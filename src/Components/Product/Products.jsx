import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductUrl } from "../../Api/endPoints";
import classes from "./Product.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Product() {
  const [results, seResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products`)
      .then((res) => {
        console.log(res.data);
        seResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderAdd={true} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
