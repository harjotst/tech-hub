import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import { Row } from "react-bootstrap";

import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (error) {
        return new Error("Products Fetch Unsuccessful");
      }
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <h2>Latest Products</h2>
      <Row xs={1} sm={1} md={2} lg={3}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </React.Fragment>
  );
}

export default HomeScreen;
