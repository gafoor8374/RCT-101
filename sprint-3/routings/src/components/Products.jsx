import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const Data = async () => {
      await fetch("http://localhost:8080/products")
        .then((r) => r.json())
        .then((d) => {
          //   console.log(product);

          setProduct(d);
        });
    };
    Data();
  }, []);

//   const handleProduct = () => {
//     fetch("http://localhost:8080/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });
//   };

  return (
    <div>
      Products:
      {/* <input type="text" placeholder="Enter Product" />
      <button onClick={handleProduct}>Add Product</button> */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Outlet />
        <div>
          {product.map((e) => {
            return (
              <div key={e.id}>
                {e.id}
                {"-"}
                <Link to={`/products/${e.id}`}>{e.title}</Link>
              </div>
            );
          })}
        </div>
        <Outlet />
        
      </div>
    </div>
  );
};
export default Products;
