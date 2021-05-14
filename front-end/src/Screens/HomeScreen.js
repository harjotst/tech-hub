import React from "react";
import Product from "../Components/Product";
import { Row } from "react-bootstrap";
import products from "../products";

function HomeScreen() {
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
