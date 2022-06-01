import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
//  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d) => {
          setProduct(d);
        });
    }
  }, [id]);

 
  return <div>Product Id: {id}
  <div>{product.title}</div>
  </div>;
};

export default Product;
