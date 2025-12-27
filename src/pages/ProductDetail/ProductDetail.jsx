import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { ProductUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import LayOut from "../../Components/Layout/LayOut";

function ProductDetail() {
  const { productId } = useParams();
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products`)
      .then((res) => {
        console.log(res.data);
        let request = res.data.filter((product) => {
          return product.id == productId;
        });
        console.log(request);
        setProduct(request);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              flex={true}
              renderAdd={true}
              renderDesc={true}
              img={true}
            />
          );
        })
      )}
    </LayOut>
  );
}

export default ProductDetail;
