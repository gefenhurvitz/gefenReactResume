import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const MY_SERVER = "http://localhost:3005/products";

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const res = await axios.get(MY_SERVER).then()
  //   setProducts(res.data);
  //   console.log(products);
  //       console.log(res.data)
  // };


  const getData = async () => {
    axios.get(MY_SERVER)
    .then((res)=>{
      setProducts(res.data)
      console.log(products)
    })
  };

  return (
    <div>
      <button onClick={() => getData()}>get data</button>

      {/* <!-- Section products--> */}
    <section id="products" className="bg-secondary py-3">
      <div className="container px-4 px-lg-5 mt-5">
        <div
          className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >

      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
      </div>
      </div>
      </section>
      


    </div>
  );
};

export default Products;
